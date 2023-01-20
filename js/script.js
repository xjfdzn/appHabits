const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  swim: ["01-01", "01-02", "01-06"],
  water: ["01-04", "01-05"],
  fruit: ["01-01", "01-03"],
}

nlwSetup.setData(data)
nlwSetup.load()