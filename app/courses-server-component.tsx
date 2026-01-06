import { getCourses } from "./actions";
import ApplicationForm from "./application-form";

export default async function CoursesServerComponent() {
    const courses = await getCourses();
    return <ApplicationForm courses={courses} />; 
}