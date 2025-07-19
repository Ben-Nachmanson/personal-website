"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
	{ href: "/", label: "Home" },
	// { href: "/about", label: "About" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

export default function NavBar() {
	const pathname = usePathname();
	const [isMobile, setIsMobile] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 700);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<nav
			style={{
				background: "#27c46c",
				padding: "0.5rem 2rem",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				position: "relative",
			}}
		>
			{/* Left: Site Title */}
			<div style={{ flex: 1, display: "flex", alignItems: "center" }}>
				<Link href="/" style={{ textDecoration: "none" }}>
					<span
						style={{
							fontWeight: 700,
							fontSize: "1.2rem", // Smaller site title
							color: "#fff",
							cursor: "pointer",
						}}
					>
						Ben Nachmanson
					</span>
				</Link>
			</div>
			{/* Center: Nav Links */}
			{!isMobile && (
				<div
					style={{
						flex: 2,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "1.5rem", // Slightly less gap
					}}
				>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							style={{
								color: pathname === link.href ? "#fff" : "#222",
								fontWeight: 600,
								fontSize: "1rem", // Smaller nav links
								fontFamily: "Inter, Arial, Helvetica, sans-serif",
								textDecoration: "none",
								background: "none",
								borderRadius: "8px",
								padding: "0.1rem 0.5rem",
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
			)}
			{/* Right: Action Buttons Example */}
			{!isMobile && (
				<div
					style={{
						flex: 1,
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					{/* <button
						style={{
							background: "#f68c5c",
							color: "#fff",
							fontWeight: 600,
							border: "none",
							borderRadius: "12px",
							padding: "0.4rem 1rem",
							fontSize: "0.95rem", // Smaller button
							cursor: "pointer",
						}}
					>
						Login
					</button> */}
					{/* <button
					style={{
						background: "#2563eb",
						color: "#fff",
						fontWeight: 600,
						border: "none",
						borderRadius: "12px",
						padding: "0.5rem 1.2rem",
						fontSize: "1.1rem",
						cursor: "pointer",
					}}
				>
					Subscribe
				</button> */}
				</div>
			)}
			{/* Mobile menu unchanged */}
			{isMobile && (
				<div style={{ position: "relative" }}>
					<button
						aria-label="Open menu"
						onClick={() => setMenuOpen((open) => !open)}
						style={{
							background: "none",
							border: "none",
							cursor: "pointer",
							padding: 0,
						}}
					>
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect y="7" width="32" height="3" rx="1.5" fill="#fff" />
							<rect y="14" width="32" height="3" rx="1.5" fill="#fff" />
							<rect y="21" width="32" height="3" rx="1.5" fill="#fff" />
						</svg>
					</button>
					{menuOpen && (
						<div
							style={{
								position: "absolute",
								top: "2.5rem",
								right: 0,
								background: "#27c46c",
								borderRadius: "8px",
								boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
								padding: "1rem 2rem",
								zIndex: 100,
							}}
						>
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									style={{
										display: "block",
										color: pathname === link.href ? "#fff" : "#222",
										fontWeight: 600,
										fontSize: "1.25rem",
										fontFamily: "Inter, Arial, Helvetica, sans-serif",
										textDecoration: "none",
										background: "none",
										borderRadius: "8px",
										padding: "0.5rem 0",
										transition: "color 0.2s",
									}}
								>
									{link.label}
								</Link>
							))}
							<button
								style={{
									width: "100%",
									marginTop: "1rem",
									background: "#f68c5c",
									color: "#fff",
									fontWeight: 600,
									border: "none",
									borderRadius: "12px",
									padding: "0.5rem 0",
									fontSize: "1.1rem",
									cursor: "pointer",
									textAlign: "center",
									display: "block",
								}}
							>
								Login
							</button>
						</div>
					)}
				</div>
			)}
		</nav>
	);
}
