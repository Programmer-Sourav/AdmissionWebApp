import { getCourses, saveApplication } from "./actions";
import UploadButton from "./upload-button";


export default function ApplicationForm() {
   const courses = getCourses();
   console.log(222, courses);
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Application Form</h1>
            <form className="space-y-4" action={saveApplication}>
                  <p>Student Name</p>
                <div className="flex flex-row gap-4">
                    <div className="w-[50%]">
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" id="firstname" name="firstname" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                    </div>
                    <div className="w-[50%]">
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" id="lastname" name="lastname" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                    </div>
                </div>
                  <p>Parent/Guardian Name</p>
                <div className="flex flex-row gap-4">
                    <div className="w-[50%]">
                    <input type="text" id="fathersname" name="fathersname" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="First Name Of Father" required />
                    </div>
                    <div className="w-[50%]">
                    <input type="text" id="fatherslastname" name="fatherslastname" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Last Name Of Father" required />
                    </div>
                </div>
                 <div className="flex flex-row gap-4">
                    <div className="w-[50%]">
                    <input type="text" id="mothersname" name="mothersname" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="First Name Of Mother" />
                    </div>
                    <div className="w-[50%]">
                    <input type="text" id="motherslastname" name="motherslastname" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Last Name Of Mother" />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter Email" />
                </div>
                <div>
                    <label htmlFor="aadhar" className="block text-sm font-medium text-gray-700">Aadhar Number</label>
                    <input type="tel" id="aadhar" name="aadhar" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Aadhar Number" />
                </div>
                <div>
                    <label htmlFor="twelfthmarks" className="block text-sm font-medium text-gray-700">Twelfth Marks</label>
                    <input type="text" id="twelfthmarks" name="twelfthmarks" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter Twelfth Marks" />
                </div>
                <div>
                    <label htmlFor="madhyamikmarks" className="block text-sm font-medium text-gray-700">Madhyamik Marks</label>
                    <input type="text" id="madhyamikmarks" name="madhyamikmarks" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter Madhyamik Marks" />
                </div>
                <div>
                    <label htmlFor="Entrance Test Marks Details" className="block text-sm font-medium text-gray-700">Entrance Test Marks Details</label>
                    <select id="entrancetestmarks" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                        <option value="select">Select Entrance</option>
                        <option value="All India Medical Entrance">All India Medical Entrance</option>
                        <option value="IIT">IIT</option>
                    </select>
                    <input type="text" id="entrancetestscore" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter Entrance Rank" />
                </div>
                <div>
                    <label htmlFor="Home Address" className="block text-sm font-medium text-gray-700">Home Address</label>
                    <input id="street-address-1" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter Street Address" />
                    <input id="street-address-2" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter Street Address Line 2" />
                    <div className="flex flex-row gap-4">
                    <div className="w-[50%]">
                    <input type="text" id="cityname" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="City" />
                    </div>
                    <div className="w-[50%]">
                    <input type="text" id="state" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="State" />
                    </div>
                </div>
                <input id="pincode" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter Pincode" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" id="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter Phone Number" />
                </div>
                 <div>
                    <label htmlFor="course1" className="block text-sm font-medium text-gray-700">Course willing to study (Preference 1)</label>
                    <select id="course1" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                        <option value="select">Select Course</option>
                        <option value="Medical">Medical</option> 
                        </select>   
                </div>
                 <div>
                    <label htmlFor="selectedColleges1" className="block text-sm font-medium text-gray-700">College willing to study</label>
                    <select id="selectedColleges1" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                        <option value="select">Select Colleges</option>
                        <option value="Medical">Medical</option> 
                        </select>   
                </div>
                <div>
                    <label htmlFor="course2" className="block text-sm font-medium text-gray-700">Course willing to study (Preference 2)</label>
                    <select id="course2" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                        <option value="select">Select Course</option>
                        <option value="Medical">Medical</option> 
                        </select>   
                </div>
                 <div>
                    <label htmlFor="selectedColleges1" className="block text-sm font-medium text-gray-700">College willing to study</label>
                    <select id="selectedColleges1" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                        <option value="select">Select Colleges</option>
                        <option value="Medical">Medical</option> 
                        </select>   
                </div>
                <div>
                    <label htmlFor="course3" className="block text-sm font-medium text-gray-700">Course willing to study (Preference 3)</label>
                    <select id="course3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                        <option value="select">Select Course</option>
                        <option value="Medical">Medical</option> 
                        </select>   
                </div>
                 <div>
                    <label htmlFor="selectedColleges1" className="block text-sm font-medium text-gray-700">College willing to study</label>
                    <select id="selectedColleges1" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                        <option value="select">Select Colleges</option>
                        <option value="Medical">Medical</option> 
                        </select>   
                </div>
                <div>
                    <label htmlFor="selectedCourses" className="block text-sm font-medium text-gray-700">Selected Courses</label>
                    <div className="flex flex-col">
                        {["Medical", "Engineering", "Arts", "Science"].map((course) => (
                            <label key={course} className="inline-flex items-center mt-2 w-[252px] p-4 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-indigo-50 hover:bg-indigo-100">
                                <span className="ml-2">{course}</span>
                            </label>
                        ))}
                    </div>
                </div>
                   <div>
      <UploadButton />
    </div>
    <div>
        <label htmlFor="tenthquaification"  className="block text-sm font-medium text-gray-700">Tenth Qualification</label>
        <input type="text" id="schoolname" name="schoolname" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter School Name" />
        <input type="text" id="passingyear" name="passingyear" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter Passing Year" />
        <input type="text" id="rollnumber" name="rollnumber" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Roll Number" />
        <input type="text" id="totalmarks" name="totalmarks" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Total Marks" />
        <input type="text" id="obtainemarks" name="obtainemarks" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Obtained Marks" />
        <p id="calculatedScore" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">Score</p>
    </div>
    <div>
        <label htmlFor="twelfthquaification" className="block text-sm font-medium text-gray-700">Twelfth Qualification</label>
        <input type="text" id="schoolname" name="schoolname" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter School Name" />
        <input type="text" id="passingyear" name="passingyear" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter Passing Year" />
        <input type="text" id="rollnumber" name="rollnumber" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Roll Number" />
        <input type="text" id="totalmarks" name="totalmarks" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Total Marks" />
        <input type="text" id="obtainemarks" name="obtainemarks" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Obtained Marks" />
        <p id="calculatedScore" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">Score</p>
    </div>
    <div>
        <label htmlFor="ugquaification" className="block text-sm font-medium text-gray-700">UG Qualification</label>
        <input type="text" id="schoolname" name="schoolname" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="College You Graduated From?" />
        <input type="text" id="passingyear" name="passingyear" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter Passing Year" />
        <input type="text" id="rollnumber" name="rollnumber" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Roll Number" />
        <input type="text" id="totalmarks" name="totalmarks" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Total Marks" />
        <input type="text" id="obtainemarks" name="obtainemarks" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Obtained Marks" />
        <p id="calculatedScore" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">Score</p>
    </div>
    <div>
        <p>Please Select One</p>
        <div className="flex flex-row gap-4">
          <input type="radio" id="sc" name="casteselection" value="sc" />
          <label htmlFor="sc" className="text-sm font-medium text-gray-700">SC</label>
          <input type="radio" id="st" name="casteselection" value="st" />
          <label htmlFor="st" className="text-sm font-medium text-gray-700">ST</label>
            <input type="radio" id="obc" name="casteselection" value="obc" />
          <label htmlFor="obc" className="text-sm font-medium text-gray-700">OBC</label>
          <input type="radio" id="ur" name="casteselection" value="ur" />
          <label htmlFor="ur" className="text-sm font-medium text-gray-700">UR</label>
           <input type="radio" id="pwd" name="casteselection" value="pwd" />
          <label htmlFor="pwd" className="text-sm font-medium text-gray-700">PWD</label>
        </div>
    </div>
               <div className="flex flex-row items-center justify-center m-12">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit Application
                </button>
                </div>
            </form>
        </div>  
    )
}