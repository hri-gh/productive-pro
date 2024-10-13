
import { signIn } from "@/auth"

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github")
            }}
        >
            <button type="submit"  className="bg-blue-500 text-white px-4 py-2 rounded">Signin with GitHub</button>
        </form>
    )
}
