class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}
const video1 = new Video("JavaScript Crash Course", "Alice", 300);
video1.watch();

const video2 = new Video("React Tutorial", "Bob", 450);
video2.watch();
const videoData = [
  { title: "Vue Basics", uploader: "Claire", time: 200 },
  { title: "CSS Grid Mastery", uploader: "David", time: 180 },
  { title: "Node.js Overview", uploader: "Eva", time: 600 },
  { title: "HTML5 Tricks", uploader: "Frank", time: 150 },
  { title: "TypeScript in Depth", uploader: "Grace", time: 400 }
];

const videoInstances = [];

for (const data of videoData) {
  const video = new Video(data.title, data.uploader, data.time);
  videoInstances.push(video);
  video.watch();
}
