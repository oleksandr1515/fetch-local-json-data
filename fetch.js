const dataLocation = "./data.json"

const getData = async () => {
  const response = await fetch(dataLocation)
  const data = await response.json()
                                    .catch(err => console.log(err))
  return data
}

const test = getData()
.then((data) => {
  if (data) {
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
  } else {
      const message = document.createElement("div")
      message.classList.add("message")
      message.classList.add("task")
      message.innerHTML = `
        <p style="text-align:center; padding-top: 40px">
          Даних не знайдено!
        </p>
      `
      document.querySelector(".container").appendChild(message)
  }
})

