import { Component } from "@angular/core";
import { PhotoService } from "./photos/photo/photo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "alurapic";

  // photos = [
  //   {
  //     url: "https://source.unsplash.com/random",
  //     description: "randomic",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random",
  //     description: "random",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random",
  //     description: "random",
  //   },
  // ];

  photos: Object[] = [];

  constructor(photoService: PhotoService) {
    photoService
      .listFromUser("flavio")
      .subscribe((photos) => (this.photos = photos));
  }
}
