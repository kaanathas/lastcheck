import{AutoGenDoc} from './auto-gen'


process.argv.forEach((val, index) => {
    console.log(val+"  "+index+"    in node")
   
  });

 let startCreataion=new AutoGenDoc();

let filelocation=process.argv[2]
 startCreataion.generateDocs(filelocation);

  