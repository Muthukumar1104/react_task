import './App.css'
import Category from './category'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DynamicComponent from './dynamic'
import Mechanical from './mechanical.jpg'
import Operator from './operator.jpg'
import ITImage from './IT.jpg'
import { useEffect, useState } from 'react'
import { categories, joinString } from './utils'

export default function App() {
  let setItem = (item) => localStorage.setItem('item', JSON.stringify(item))
  let getItem = JSON.parse(localStorage.getItem('item'))

  useEffect(() => {
    if (getItem && getItem !== null) {
      setLocalValue(getItem)
    } else {
      setItem(categories)
    }
  }, [])
  const [localValue, setLocalValue] = useState(categories)
  //  let list = localValue.map(data=>data.item).flat()
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Category localValue={localValue} setLocalValue={setLocalValue} />
            }
          />
          {/* {list.map(data=>
        <Route path={`/${data}`} element={<DynamicComponent name={data}/>}/>)} */}
          {localValue.map((title) => {
            if (title.name === 'Technology') {
              return title.item.map((data) => (
                <Route
                  path={`/${joinString(data)}`}
                  element={
                    <DynamicComponent
                      name={data}
                      description="Technical support (abbreviated as tech support) is an advice service provided, 
            usually over the phone, to help people who have problems using a computer.
            Presently most large and mid-size companies have outsourced their tech support operations.
            Many companies provide discussion boards for users of their products to interact; such forums
            allow companies to reduce their support costs without losing the benefit of customer feedback."
                      title={title.name}
                      image={ITImage}
                    />
                  }
                />
              ))
            }
            if (title.name === 'Innovation') {
              return title.item.map((data) => (
                <Route
                  path={`/${joinString(data)}`}
                  element={
                    <DynamicComponent
                      name={data}
                      description="Project Planning and Management (PPM) comprises project planning,
            organizing, motivating, and resource management for accomplishing a specific project.
            Primarily, PPM and MSP are used by civil and mechanical engineers and architects to
            achieve their desired project objectives. Precisely, PPM and MSP together help achieve
            business goals in the construction and manufacturing industry."
                      title={title.name}
                      image={Mechanical}
                    />
                  }
                />
              ))
            }
            if (title.name === 'Education') {
              return title.item.map((data) => (
                <Route
                  path={`/${joinString(data)}`}
                  element={
                    <DynamicComponent
                      name={data}
                      title={title.name}
                      image={Operator}
                      description="Operating engineers learn many of their duties 
            from on the job practical training. This is a job that allows
            you to move around regularly, work with your hands and troubleshoot 
            problems with machinery and vehicles. As an operating engineer
            working for us, you will be working on a variety of machines,
            including but not limited to: backhoes, motor graders, bulldozers,
             front-end loaders and air compressors."
                    />
                  }
                />
              ))
            }
          })}
        </Routes>
      </Router>
    </div>
  )
}
