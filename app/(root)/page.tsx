
// import { fetchPatients } from "@/services/fetch-patients";
// import { PatientData } from "@/types/patient.interface";

// import { auth } from "@/auth";
import LabelList from "@/components/label-list";

export default async function Home() {
  // const patients: PatientData[] = await fetchPatients()

  // console.log("PATIENTS::",patients)

  // const session = await auth()
  // if (!session) return <div>Not authenticated</div>

  // if(!patients) return <div>Failed to fetch </div>

  return (
    <>
      {/* <p>{session.user?.email}</p> */}
      {/* <div className="flex flex-wrap justify-center my-4">
        {patients.map((patient: PatientData) => (
          <div key={patient._id} className="bg-gray-500 rounded shadow-md p-4 w-64 mb-4 mx-4">
            <h2 className="text-lg font-bold">{patient.name}</h2>
            <p className="text-gray-900">{patient.email}</p>
          </div>
        ))}
      </div> */}
      <LabelList />
    </>

  );
}
