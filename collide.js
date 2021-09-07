function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,bubble); 
              bubble = null;
              return true; 
            }
            else{
              return false;
            }
         }
}