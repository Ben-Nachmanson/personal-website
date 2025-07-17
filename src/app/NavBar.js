"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

export default function NavBar() {
	const pathname = usePathname();
	return (
		<nav
			style={{
				background: "#27c46c",
				padding: "0.5rem 2rem",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
				}}
			>
				<div
					style={{
						display: "flex",
						gap: "2rem",
						alignItems: "center",
					}}
				>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							style={{
								color: pathname === link.href ? "#fff" : "#222",
								fontWeight: 600,
								fontSize: "1.25rem",
								fontFamily: "Inter, Arial, Helvetica, sans-serif",
								textDecoration: "none",
								background: "none",
								borderRadius: "8px",
								padding: "0.15rem 0.7rem",
								transition: "color 0.2s",
							}}
							onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
							onMouseLeave={(e) =>
								(e.currentTarget.style.color =
									pathname === link.href ? "#fff" : "#222")
							}
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
