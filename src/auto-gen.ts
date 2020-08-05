
import {DocsCreation} from './sample-code-gen'

export class AutoGenDoc{
creation =new DocsCreation();

    constructor(){

    }

 generateDocs(filePath:string) {
    try{

        this.creation.HtmlDocCreate(filePath);
        this.creation.ReactDocCreate(filePath)

    }catch(e){
        console.log("this wsa an error while sample genaration"+e);
    }
}


}