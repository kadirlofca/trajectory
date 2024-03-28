import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function TextForm() {
    return (
        <div className="grid w-full gap-2">
            <Textarea placeholder="Enter Links or Notes here." />
        </div>
    )
}
