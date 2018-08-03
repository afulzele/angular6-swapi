export class Film{
    constructor(public title:string, public release_date:Date, public director:string, public producer:string, public description:string, public characters:Array<Object>){}
}