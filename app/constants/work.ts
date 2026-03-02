import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: "2020",
    title: "SRMIST",
    subtitle: "B.Tech CSE (AI & ML) | GPA: 8.72",
    position: "right",
  },
  {
    point: new THREE.Vector3(-4, -3, -2),
    year: "2023",
    title: "AIML INTERN",
    subtitle: "Generative AI & LLMs",
    position: "left",
  },
  {
    point: new THREE.Vector3(-2, -2, -5),
    year: "2025",
    title: "Freelancing",
    subtitle: "Website , AI, Chatbot Development",
    position: "left",
  },
  {
    point: new THREE.Vector3(0, -1, -8),
    year: "2024 - 2025",
    title: "Career Break",
    subtitle: "UPSC Prep | Governance, Policy & Economics",
    position: "right",
  },
  {
    point: new THREE.Vector3(1, 1, -10),
    year: new Date().toLocaleDateString("default", { year: "numeric" }),
    title: "Next Chapter",
    subtitle: "Eager to apply skills in corporate environment",
    position: "right",
  },
];
