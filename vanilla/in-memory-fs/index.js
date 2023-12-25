class InMemoryFS {
  constructor() {
    this.directory = { root: {} };
    this.currentDirPath = "root";
    this.currentDir = this.directory["root"];
  }

  createDirectory(name) {
    this.directory[name] = {};
  }

  changeDirectory(path) {
    // path = /abc/xyz/rtc
    const paths = path.split("/");
    let current = this.directory;
    for (let key of paths) {
      current = current[key];
    }

    this.currentDir = current;
    this.currentDirPath = path;
  }

  getCurrentDirectoryPath() {
    return this.currentDirPath;
  }

  getCurrentDirectory() {
    return this.currentDir;
  }

  addFile(fileName) {
    if (this.currentDir.files) {
      this.currentDir.files.push(fileName);
    } else {
      this.currentDir["files"] = [fileName];
    }

    return true;
  }

  removeFile(fileName) {
    this.currentDir.files = this.currentDir.files.filter(
      (file) => file !== fileName,
    );
    return true;
  }

  deleteDirectory(name) {
    delete this.currentDir[name];
  }

  getRootDirectory() {
    return this.directory;
  }
}
