import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { createBlog, updateBlog } from '@kamaldeepsingh0/medium-common'

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    userId: string;
  }
}>()

   blogRouter.use('/*', async (c, next) => {
    const header = c.req.header("authorization") ||"";
    const token = header.split(" ")[1];
    try {
    const response = await verify(token,c.env.JWT_SECRET) as { id: string };
    if(response){
        c.set("userId",response.id)
       await next()
     }else{
       c.status(403);
       return c.json({ error: "UnAuthorised" });
     }
    } catch (error) {
        c.status(403);
        return c.json({ error: "Invalid token" });
      }
    })
      
  
   blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        const body = await c.req.json();
         const {success} = createBlog.safeParse(body);
            if(!success){
                c.status(403);
                return c.json({ error: "invalid inputs" });
            }
        const authorId = c.get("userId")
        try{
        const blog = await prisma.blog.create({
            data:{
                title: body.title,
                content: body.content,
                authorId: authorId
            }
        })
    return c.json({
        id : blog.id
    })
   }catch(e){
    c.status(403);
   return c.json({ error: "Cnt able to post blog" });
   }
     })
  
 
   blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        const body = await c.req.json();
         const {success} = updateBlog.safeParse(body);
            if(!success){
                c.status(403);
                return c.json({ error: "invalid inputs" });
            }
        try {
        const blog = await prisma.blog.update({
            where:{
                id : body.id
            },
            data:{
                title: body.title,
                content: body.content,
            }
        })
    return c.json({
        id : blog.id
    })
    } catch (error) {
    c.status(403);
    return c.json({ error: "not updating" });
  }
  })

  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
       try{
        const blog = await prisma.blog.findMany();
    return c.json({
        blog
    })
    } catch (error) {
    c.status(403);
    return c.json({ error: "cant able to find" });
    }
  })

  
   blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
        const blogId = await c.req.param("id");
           try{
        const blog = await prisma.blog.findFirst({
            where:{
                id : blogId
            }
        })
    return c.json({
         blog
    })
} catch (error) {
   
    return c.json({ error: "cant find this blog" });
  }
   })
  

  