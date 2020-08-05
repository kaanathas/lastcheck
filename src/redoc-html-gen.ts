const cmd=require('node-cmd');

export class Redochtml{
     filename="index-" + Date.now()+".html"
     constructor(){

     }

     async redocGen(){
        await cmd.get(`redoc-cli bundle file/schema.yaml --output docs/${this.filename}`,
        function(err:any, data:any, stderr:any){
            if(!err){
             return data;
            }
    })

    
     }



}