export class ImagesAPIResponse {
  private readonly url: string;
  private readonly imageTitle: string;
  private readonly copyright: string;

  constructor(url: string, imageTitle: string, copyright: string) {
    this.url = url;
    this.imageTitle = imageTitle;
    this.copyright = copyright;
  }

  public getURL = () => {
    return this.url;
  };

  public getImageTitle = () => {
    return this.imageTitle;
  };

  public getCopyright = () => {
    return this.copyright;
  };
}
