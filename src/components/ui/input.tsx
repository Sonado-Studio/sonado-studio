import { Input as InputPrimitive } from "@base-ui/react/input"
import type * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<InputPrimitive
			type={type}
			data-slot="input"
			className={cn(
				"bg-input/30 border-secondary/80 focus-visible:border-ring focus-visible:ring-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive/80 dark:aria-invalid:border-destructive/50 h-9 rounded-sm border px-3 py-1 text-base transition-colors file:h-7 file:text-sm file:font-medium focus-visible:ring-1 aria-invalid:ring-1 md:text-sm file:text-foreground placeholder:text-primary/35 w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		/>
	)
}

export { Input }
