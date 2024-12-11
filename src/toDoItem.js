export class toDoItem{
    constructor(title, description, dueDate, priority, checkStatus, parentProject){
        this.checkStatus= checkStatus ? checkStatus : false ;
        this.title = title;
        this.description= description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.parentProject=parentProject;
    };
}