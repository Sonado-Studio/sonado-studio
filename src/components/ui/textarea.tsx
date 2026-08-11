import type * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"bg-input/30 border-secondary/80 focus-visible:border-ring focus-visible:ring-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive/80 dark:aria-invalid:border-destructive/50 resize-none rounded-sm border px-3 py-3 text-base transition-colors focus-visible:ring-1 aria-invalid:ring-1 md:text-sm placeholder:text-primary/35 flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		/>
	)
}

export { Textarea }
