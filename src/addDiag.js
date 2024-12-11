import { addTaskToDom, createProject } from "./dom.js";
import { project } from "./project.js";

export function addTaskDialog(item, ProjectContainer){
    const taskDialog = document.createElement("dialog");
    taskDialog.classList.add("taskDialog")
    const content = document.getElementById("content");
    content.appendChild(taskDialog); 
    taskDialog.showModal();


    const addTaskForm = document.createElement("form");
    addTaskForm.classList.add("addTaskForm")

    const addedItem = {
        title : {
            name:"title",
            type: "text",
        },
        description: {
            name:"description",
            type: "textbox",
        },
        dueDate: {
            name:"dueDate",
            type: "date",
        },
        priority:  {
            name:"priority",
            type: "select",
            items: ["High", "Medium", "Low"],
        },
    }
    
    for(let item in addedItem){
        const inputContainer = document.createElement("div");
        inputContainer.classList.add("inputContainer");

        const InputLabel = document.createElement("label");
        InputLabel.textContent = 
            addedItem[item]["name"].
            charAt(0).
            toUpperCase() + addedItem[item]["name"].slice(1);
            InputLabel.setAttribute("for",addedItem[item]["name"]);


        
        if (addedItem[item]["type"] === "select"){
            const InputElement = document.createElement("select");
            InputElement.name = addedItem[item]["name"];
            InputElement.id = addedItem[item]["name"];
            InputElement.required = true; 

            addedItem[item]["items"].forEach(element => {
                const option = document.createElement("option");
                option.textContent=element;
                option.value = element;
                InputElement.appendChild(option);

            });

            inputContainer.append(InputLabel, InputElement);
            addTaskForm.append(inputContainer);

        }else{
            let InputElement;
            if(addedItem[item]["type"] === "textbox"){
                InputElement = document.createElement("textarea");
            }else{
                InputElement = document.createElement("input");
                InputElement.type = addedItem[item]["type"];
            }
            InputElement.name = addedItem[item]["name"];
            InputElement.id = addedItem[item]["name"];
            InputElement.required = true;

            inputContainer.append(InputLabel, InputElement);
            addTaskForm.append(inputContainer);
        }
        
    }

    const submit = document.createElement("input")
    submit.type = "Submit";
    submit.value = "Submit";
    submit.id="submit";

    function submitForm(){
        if (addTaskForm.checkValidity()) {
            let values = [];
            values.push(document.getElementById('title').value);
            values.push(document.getElementById('description').value);
            values.push(document.getElementById('dueDate').value);
            values.push(document.getElementById('priority').value);
            item.addNewTask(...values);

            const lastItem = Object.keys(item.tasks)[Object.keys(item.tasks).length - 1];
            ProjectContainer.append(addTaskToDom(lastItem, item));

            taskDialog.textContent = "";
            taskDialog.close();
        }
    }
    
    submit.addEventListener('click', function(e){
        submitForm();
    })
    
    addTaskForm.append(submit);
    addTaskForm.onkeydown = function(e){
        if(e.key === 'Enter' || e.keyCode === 13){
            e.preventDefault();
            submitForm();
        }
    }


    
    taskDialog.appendChild(addTaskForm);

}



export function addProjectDiag(item){
    const projectDialog = document.createElement("dialog");
    projectDialog.classList.add("projectDialog")
    const content = document.getElementById("content");
    content.appendChild(projectDialog); 
    projectDialog.showModal();

    const addprojectForm = document.createElement("form");
    addprojectForm.classList.add("addprojectForm")

    const addedItem = {
        title : {
            name:"title",
            type: "text",
        },
    }

    for(let item in addedItem){
        const inputContainer = document.createElement("div");
        inputContainer.classList.add("inputContainer");

        const InputLabel = document.createElement("label");
        InputLabel.textContent = 
            addedItem[item]["name"].
            charAt(0).
            toUpperCase() + addedItem[item]["name"].slice(1);
            InputLabel.setAttribute("for",addedItem[item]["name"]);

        const InputElement = document.createElement("input");
        InputElement.type = addedItem[item]["type"];
        InputElement.name = addedItem[item]["name"];
        InputElement.id = addedItem[item]["name"];
        InputElement.maxLength = 40;
        InputElement.required = true;

        inputContainer.append(InputLabel, InputElement);
        addprojectForm.append(inputContainer);
    }
    const submit = document.createElement("input")
    submit.type = "Submit";
    submit.value = "Submit";
    submit.id="submit";

    function submitForm(){
        if (addprojectForm.checkValidity()) {
            new item(document.getElementById('title').value);
            projectDialog.textContent = "";
            projectDialog.close();
        }
    }
    
    submit.addEventListener('click', function(e){
        submitForm();
    })

    projectDialog.append(addprojectForm, submit);
    
    projectDialog.onkeydown = function(e){
        if(e.key === 'Enter' || e.keyCode === 13){
            e.preventDefault();
            submitForm();
        }
    }
}