export class Todo
{
    sno: number ;
    title: string;  
    desc: string ;
    active: boolean; 

        constructor() {
            this.title = '';
            this.desc = '';
            this.active= true;
            this.sno = 0;
          }  
}