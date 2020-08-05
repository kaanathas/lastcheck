import AdmZip from "adm-zip";

export class Zipper{
 zip=new AdmZip;
    constructor(){}

  zipping() {
    const downloadName = `${process.argv[3]}.zip`;
    this.zip.addLocalFolder("my-app");
    this.zip.writeZip(process.argv[4]+"/"+downloadName);

 }
   
}


