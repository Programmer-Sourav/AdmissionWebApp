"use server"

import { z } from "zod"
import { da } from "zod/locales";

const schema =z.object({
    firstname: z.string().min(2).max(100),
    lastname: z.string().min(2).max(100),
    email: z.email(),
    aadhar: z.number().max(12),
})

export async function saveApplication(data: FormData){
    console.log("Saving application...")
    console.log(data);
  const parsedData = schema.safeParse({
    firstname: data.get("firstname") as string,
    lastname: data.get("lastname") as string,
    parent_first_name: data.get("fathersname") as string,
    parent_last_name: data.get("fatherslastname") as string,
    mothers_first_name: data.get("mothersname") as string,
    mothers_last_name: data.get("motherslastname") as string,
    studentEmail: data.get("email") as string,
    aadhar_number: data.get("aadhar") as string,
    twelft_hmarks: data.get("twelfthmarks") as string,
    madhyamik_marks: data.get("madhyamikmarks") as string,
    schoolName: data.getAll("schoolname")[0] as string,
    schoolName12th: data.getAll("schoolname")[1] as string,
    ugCollegeName: data.getAll("schoolname")[2] as string,
    passingYear: data.getAll("passingyear")[0] as string,
    passingYear12th: data.getAll("passingyear")[1] as string,
    ugPassingYear: data.getAll("passingyear")[2] as string,
    rollNumber: data.getAll("rollno")[0] as string,
    rollNumber12th: data.getAll("rollno")[1] as string,
    ugRollNumber: data.getAll("rollno")[2] as string,
    totalMarks: data.getAll("totalmarks")[0] as string,
    totalMarks12th: data.getAll("totalmarks")[1] as string,
    ugTotalMarks: data.getAll("totalmarks")[2] as string,
    obtainedMarks: data.getAll("marksobtained")[0] as string,
    obtainedMarks12th: data.getAll("marksobtained")[1] as string,
    ugObtainedMarks: data.getAll("marksobtained")[2] as string,
    caste : data.get("casteSelection") as string,
  })

  const response = await fetch('https://www.travelsawari.com/index_course.php/post_application_form', {
    method: 'POST',
    headers: {
        authorization: `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json',
    },  
    body: JSON.stringify({parsedData})
});

  const result = await response.json();
  console.log("Response from API:", result)
}

export async function getCourses(){
  let courses = [];
  try{
  const response = await fetch('https://www.travelsawari.com/index_course.php/get_annoucement', {
    method: 'GET' 
});
courses = await response.json();
  }
  catch(err){
    console.log("Error fetching courses:", err);
    return [];
  }
return courses;
}