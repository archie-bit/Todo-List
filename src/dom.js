import { addTaskDialog, addProjectDiag } from "./addDiag";
import { project } from "./project";

export function createInterface(){
    const content = document.getElementById("content");

    const sideBar = document.createElement("div");
    sideBar.classList.add("sideBar");

    const showAllTasks = document.createElement("button");
    showAllTasks.textContent="Show All Tasks";
    showAllTasks.classList.add("showAllTasks");
    showAllTasks.addEventListener("click", ()=>{
        const tasksMenu = document.querySelector(".tasksMenu");
        tasksMenu.textContent="";

        const ProjectContainer = document.createElement("div");
        ProjectContainer.classList.add("projectContainer");

        const projectTitle = document.createElement("h1");
        projectTitle.textContent = "All Tasks";

        ProjectContainer.append(projectTitle);

        for(let thisProject in project.allProjects){
            thisProject= project.allProjects[thisProject];
            for(let task in thisProject.tasks){
                task = thisProject.tasks[task];
                ProjectContainer.appendChild(addTaskToDom(task));
            }
        }
        tasksMenu.appendChild(ProjectContainer);
    })

    const projects = document.createElement("div");
    projects.classList.add("projectsSideBar");

    const addProject = document.createElement("button");
    addProject.textContent="New Project";
    addProject.classList.add("addProject");
    addProject.addEventListener("click", ()=>{
        addProjectDiag(project);
    })

    const projectMenu = document.createElement("div");
    projectMenu.classList.add("projectMenu");

    projects.append(showAllTasks, addProject, projectMenu);
    sideBar.append(projects);

    const tasksMenu = document.createElement("div");
    tasksMenu.classList.add("tasksMenu");

    content.append(sideBar, tasksMenu);
}


export function addTaskToDom(task, item){
    const taskContainer= document.createElement("div");
    taskContainer.classList.add("taskContainer");
            

    const taskForm = document.createElement("div");
    taskForm.classList.add("taskForm");
    
    let target;
    if(!item){
        target = task;
    }else{
        target = item.tasks[task];
    }
    let taskParentStorage = JSON.parse(localStorage.getItem(target.parentProject));


    const taskcheck = document.createElement("input");
    taskcheck.type = "checkbox";
    taskcheck.id = target["title"];
    taskcheck.name = target["title"];

    if(target["checkStatus"]===true){
        taskcheck.checked=true;
    }else{
        taskcheck.checked=false;
    }

    taskcheck.addEventListener("click", ()=>{
        if(target.checkStatus===true){
            target.checkStatus=false;
        }else {
            target.checkStatus=true;
        };
        taskParentStorage[target.title]["checkStatus"]=target.checkStatus;
        localStorage.setItem(target["parentProject"], JSON.stringify(taskParentStorage));
    })

    const taskName = document.createElement("label");
    taskName.setAttribute("for", target["title"]);
    taskName.textContent= target["title"];

    taskForm.append(taskcheck, taskName)


    const taskDesc = document.createElement("p");
    taskDesc.textContent= target["description"];
    taskDesc.classList.add("taskDesc")

    const taskDate = document.createElement("p");
    taskDate.textContent= "Due Date: " + target["dueDate"];
    taskDate.classList.add("taskDate")

    const taskPriority = document.createElement("p");
    taskPriority.textContent= "Task Priority: " + target["priority"];
    taskPriority.classList.add("taskPriority")

    const delButton = document.createElement("button");
    delButton.classList.add("delButton");
    delButton.textContent="Delete";
    delButton.addEventListener("click", ()=>{
        if(!item){
            let taskParent = project.allProjects[target["parentProject"]];
            taskParent.removeTask(target["title"])
            taskContainer.remove();
        }else if(item){
            item.removeTask(task);
            taskContainer.remove();
        }
        
        delete taskParentStorage[target.title];
        localStorage.setItem(target["parentProject"], JSON.stringify(taskParentStorage));
    })


    taskContainer.append(taskForm, taskDesc, taskDate, taskPriority, delButton);
    return taskContainer;

}


export function showProject(project, item){
    project.addEventListener("click", ()=>{
        const tasksMenu = document.querySelector(".tasksMenu");
        tasksMenu.textContent="";

        const ProjectContainer = document.createElement("div");
        ProjectContainer.classList.add("projectContainer");

        
        const projectTitle = document.createElement("h1");
        projectTitle.textContent = item.name;

        const addTask = document.createElement("button");
        addTask.classList.add("addTask");
        addTask.textContent="Add"; 
        addTask.addEventListener("click", ()=>{
            addTaskDialog(item, ProjectContainer);
        })

        ProjectContainer.append(projectTitle, addTask);

        for(let task in item.tasks){
            ProjectContainer.appendChild(addTaskToDom(task, item));
            
        }

        tasksMenu.appendChild(ProjectContainer);
        }
    )
}


