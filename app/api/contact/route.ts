import { NextRequest, NextResponse } from 'next/server'
import * as XLSX from 'xlsx'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, category, subject, message } = body

    // Validate required fields
    if (!name || !email || !category || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create data object with timestamp
    const formData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      category,
      subject,
      message
    }

    // Define file path
    const filePath = path.join(process.cwd(), 'data', 'contact-submissions.xlsx')
    const dataDir = path.join(process.cwd(), 'data')

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    let existingData = []
    let worksheet

    // Check if file exists and read existing data
    if (fs.existsSync(filePath)) {
      try {
        const workbook = XLSX.readFile(filePath)
        worksheet = workbook.Sheets[workbook.SheetNames[0]]
        existingData = XLSX.utils.sheet_to_json(worksheet)
      } catch (error) {
        console.error('Error reading existing file:', error)
        // If file is corrupted, start fresh
        existingData = []
      }
    }

    // Add new data to existing data
    existingData.push(formData)

    // Create new workbook with updated data
    const newWorkbook = XLSX.utils.book_new()
    const newWorksheet = XLSX.utils.json_to_sheet(existingData)
    
    // Set column widths
    const columnWidths = [
      { wch: 20 }, // timestamp
      { wch: 25 }, // name
      { wch: 30 }, // email
      { wch: 15 }, // category
      { wch: 40 }, // subject
      { wch: 50 }  // message
    ]
    newWorksheet['!cols'] = columnWidths

    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Contact Submissions')

    // Write to file
    XLSX.writeFile(newWorkbook, filePath)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form data saved successfully',
        totalSubmissions: existingData.length
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error saving contact form data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
