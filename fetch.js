const dataLocation = "./data.json"

const getData = async () => {
  const response = await fetch(dataLocation)
  const data = await response.json()
  return data
}

const test = getData()
.then((data) => {
  data.forEach(dataObject => {
    const task = document.createElement("div")
    task.classList.add("task")
    task.innerHTML = `
      <div class="task-text">
        <p class="task-title">${dataObject.task || "?"}</p>
        <p class="task-responsible">${dataObject.responsible || "-"}</p>
      </div>
      <div class="task-img-container">
        <img class="task-img" src="${dataObject.imgsrc || "#"}" alt="Значок" >
      </div>
    `
    document.querySelector(".container").appendChild(task)
  })
})

