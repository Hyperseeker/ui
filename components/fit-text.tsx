import { cn } from "@/lib/utils";
import type { CSSProperties, FunctionComponent, HTMLAttributes } from "react";

type FitTextProps = HTMLAttributes<HTMLSpanElement> & {
	/**
	 * Maximum width of the text, as a CSS length string. See examples below.
	 * The contents of the component will not grow beyond the stated width if `max` is provided.
	 * If not provided, the text will scale to the limits of its container.
	 *
	 * @example "12rem"
	 * @example "800px"
	 * @example "var(--max-text-size)"
	 */
	max?: string;
};

export const FitText: FunctionComponent<FitTextProps> = ({
	children,
	max,
	className,
	style,
	...props
}) => {
	return (
		<span
			className={cn("fit-text flex @container", className)}
			style={
				{
					"--fit-text-max": max,
					...(style as CSSProperties),
				} as CSSProperties
			}
			{...props}
		>
			<span className="fit-text-container grow @container">
				<span className="fit-text-display block">{children}</span>
			</span>
			<span aria-hidden="true" className="invisible">
				{children}
			</span>
		</span>
	);
};
