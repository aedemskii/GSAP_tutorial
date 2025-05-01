import "./style.scss";
import gsap from "gsap";

gsap.to(".box--1", {
	duration: 2,
	rotation: 720,
	delay: 0.5,
	ease: "power2.out"
});

gsap.from(".box--2", {
	x: -200,
	duration: 2,
	rotation: 360,
	delay: 1,
	ease: "power2.out"
});

gsap.fromTo(".box--3",
	{ x: 200, rotation: 0 },
	{ x: 0, rotation: -360, duration: 2, delay: 1.5, ease: "power2.out" }
);

const tl = gsap.timeline();

tl.to(".box--4", {
	rotation: 360,
	scale: 1.5,
	duration: 1,
	delay: 2,
	ease: "power2.in"
})
.to(".box--4", {
	rotation: 720,
	scale: 1,
	duration: 2,
	ease: "power2.out"
});
