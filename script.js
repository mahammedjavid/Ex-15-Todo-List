window.addEventListener('load',()=>{
    // let form = document.querySelector('#new_task_form')
    let input = document.querySelector('#new_task_input')
    let submit  = document.querySelector('#new_task_submit')

    let list_Element = document.querySelector('#tasks') 

    submit.addEventListener('click',(e)=>{
        e.preventDefault()

        if(!input.value){
            alert('enter the task to complete')
            return
        }
        const TotaltaskLi = document.createElement('div')
        TotaltaskLi.classList.add('task')

        const contentLi = document.createElement('div')
        contentLi.classList.add('content')
        // contentLi.innerText = input.value

        const taskinput = document.createElement('input')
        taskinput.classList.add('text')
        taskinput.setAttribute('readonly','readonly')
        taskinput.type = "text"
        taskinput.value = input.value
        
        contentLi.appendChild(taskinput)

        TotaltaskLi.appendChild(contentLi);
        list_Element.appendChild(TotaltaskLi);

        const actionsEl = document.createElement('div')
        actionsEl.classList.add('actions')

        const editeEl = document.createElement('button')
        editeEl.classList.add('edit')
        editeEl.innerHTML = "Edit"

        const deleteEl = document.createElement('button')
        deleteEl.classList.add('delete')
        deleteEl.innerHTML = "Delete"

        actionsEl.appendChild(editeEl)
        actionsEl.appendChild(deleteEl)

        TotaltaskLi.appendChild(actionsEl)
        list_Element.appendChild(TotaltaskLi)
        input.value = ""

        editeEl.addEventListener('click',()=>{
                if(editeEl.innerText.toLowerCase()=='edit'){
                    editeEl.innerText = "Save"
                    taskinput.removeAttribute("readonly")
                    taskinput.focus()
                }
                else{
                    taskinput.setAttribute("readonly","readonly")
                    editeEl.innerText = "Edit"
                }
            
        })

        deleteEl.addEventListener('click',() => {
            TotaltaskLi.remove()
        })

        let deletAll = document.querySelector('.deleteAll')

        deletAll.addEventListener('click',() => {
            list_Element.remove(TotaltaskLi)
        })


    })
    
})