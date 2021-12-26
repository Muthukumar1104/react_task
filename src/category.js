import React, { useState, useEffect } from 'react'
import './App.css'
import { categories, SelectList, sortedArray, joinString } from './utils'

export default function Category({ localValue, setLocalValue }) {
  const [categoryList, setCategoryList] = useState(categories)
  const [title, setTitle] = useState('IT')
  const [item, setItem] = useState('')
  useEffect(() => {
    if (localValue && localValue !== null) {
      setCategoryList(localValue)
    } else {
      localStorage.setItem('item', JSON.stringify(categories))
    }
  }, [])
  const submitCategory = () => {
    let filteredValue = categoryList.filter((data) => data.name !== title)
    let newList = categoryList
      .filter((data) => data.name === title)
      .map((data) => ({ name: title, item: [...data.item, item] }))
    localStorage.setItem('item', JSON.stringify([...newList, ...filteredValue]))
    setCategoryList([...newList, ...filteredValue])
    setLocalValue([...newList, ...filteredValue])
    setTitle(title)
    setItem('')
  }
  const changeTitle = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
  }
  return (
    <div>
      {localValue !== null && <NavBarContent localValue={localValue} />}
      <div className="container">
        <h1>Add a New category</h1>
        <div className="field">
          <label>Category Name</label>
          <input
            name="CategoryName"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            autocomplete="off"
          />
        </div>
        <div className="main-dropdown">
          <label>Parent Category</label>
          <SelectList value={title} onChange={changeTitle}>
            <option disabled selected>
              Choose a Parent
            </option>
            {categoryList.map((data) => (
              <option value={data.name}>{data.name}</option>
            ))}
          </SelectList>
        </div>
        <div className="button">
          <button
            className="Add-button"
            disabled={item === ''}
            onClick={submitCategory}
          >
            Add category
          </button>
        </div>
      </div>
    </div>
  )
}

function NavBarContent({ localValue }) {
  sortedArray(localValue)
  return (
    <div className="topnav">
      <div className="homepage">
        <ul>
          <li>
            <a href="/">Home page</a>
          </li>
        </ul>
      </div>
      {localValue.map((title) => (
        <div className="dropdown hover">
          <a>{title.name}</a>
          <ul>
            {title.item.map((data) => (
              <li>
                <a href={`/${joinString(data)}`}>{data}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
