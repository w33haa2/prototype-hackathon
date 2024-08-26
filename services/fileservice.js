//write me a nodejs function that accepts a file, then writes it to public/files
//and returns the path to the file

import fs from 'fs/promises'
import path from 'path'
import process from 'process'

export const writeToFile = async (file) => {
  const filePath = path.join(process.cwd(), 'public', 'files', file.originalname)
  await fs.writeFile(filePath, file.buffer)
  return path.join('public', 'files', file.originalname)
}

//file path should start from public
export const getFile = async (filePath) => {
  const path = path.join(process.cwd(), filePath)
  const file = await fs.readFile(path)
  return file
}
// UPLOADS.JSON SHOULD HAVE [] IF EMPTY
const UPLOADS_FILE = path.join(process.cwd(), 'uploads.json')

//writes to uploads.js, where file references are stored
// Function to add an object to the JSON file
export const addUpload = async (newObject) => {
  try {
    const fileContent = await fs.readFile(UPLOADS_FILE, 'utf8')
    const currentArray = JSON.parse(fileContent)

    //check if current array is null

    if (!currentArray) {
      await fs.writeFile(UPLOADS_FILE, JSON.stringify([newObject]), 'utf8')
      console.log('Object added successfully')
      return newObject
    }

    currentArray.push(newObject)

    await fs.writeFile(UPLOADS_FILE, JSON.stringify(currentArray), 'utf8')

    return newObject
  } catch (error) {
    console.error('Error updating file:', error)
  }
}

export const updateUpload = async (id, updatedObject) => {
  try {
    const fileContent = await fs.readFile(UPLOADS_FILE, 'utf8')
    const currentArray = JSON.parse(fileContent)

    const index = currentArray.findIndex((obj) => obj.id === id)

    currentArray[index] = { ...currentArray[index], ...updatedObject }

    await fs.writeFile(UPLOADS_FILE, JSON.stringify(currentArray), 'utf8')

    return currentArray[index]
  } catch (error) {
    console.error('Error updating object:', error)
  }
}

export const getUploads = async () => {
  try {
    const fileContent = await fs.readFile(UPLOADS_FILE, 'utf8')
    const currentArray = JSON.parse(fileContent)
    return currentArray
  } catch (error) {
    console.error('Error getting objects:', error)
  }
}

//get a single object
export const getUpload = async (id) => {
  try {
    const fileContent = await fs.readFile(UPLOADS_FILE, 'utf8')
    const currentArray = JSON.parse(fileContent)
    return currentArray.find((obj) => obj.id === id)
  } catch (error) {
    console.error('Error getting object:', error)
  }
}
