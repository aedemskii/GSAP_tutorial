import "./style.scss";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create("maxSpeedEnd", "M0,0 C0.2,0 0.8,1 1,1");
CustomEase.create("maxSpeedStart", "M0,0 C0.2,0.9 0.8,1 1,1");

const timeline = gsap.timeline({
	defaults: {
	  duration: 2
	}
  });

timeline
.to(".box--1", {
	y: 360,
	rotation: 720,
	duration: 1,
	ease: 'power1.in',
	yoyo: true,
	repeat: 1
})
.from(".box--2", {
	x: -200,
	duration: 2,
	rotation: 360,
	ease: "power2.out"
}, "-=0.5")
.fromTo(".box--3",
	{ x: 200, rotation: 0 },
	{ x: 0, rotation: -360, duration: 2, ease: "power2.out" },
	"-=1.2"
)
.to(".box--4", {
	rotation: 360,
	scale: 1.5,
	duration: 1,
	ease: "none" // линейное движение, чтобы не было склейки
}, "-=1.2")
.to(".box--4", {
	rotation: 720,
	scale: 1,
	duration: 2,
	ease: "power1.out", // плавный выход
	onComplete: () => console.log("Анимация завершена!")
}, "-=.2");
