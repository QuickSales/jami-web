class Contact {
  private readonly uri: string;
  private readonly displayName: string | undefined;
  private registeredName: string | undefined;

  constructor(uri: string) {
    this.uri = uri;
    this.displayName = undefined;
    this.registeredName = undefined;
  }

  static from(object: any) {
    const contact = new Contact(object.uri);
    if (object.registeredName) contact.setRegisteredName(object.registeredName);
    return contact;
  }

  getUri() {
    return this.uri;
  }

  getRegisteredName() {
    return this.registeredName;
  }

  setRegisteredName(name: string | undefined) {
    this.registeredName = name;
  }

  isRegisteredNameResolved() {
    return this.registeredName !== undefined;
  }

  getDisplayName() {
    return this.getDisplayNameNoFallback() || this.getUri();
  }

  getDisplayNameNoFallback() {
    return this.displayName || this.getRegisteredName();
  }

  async getObject() {
    return {
      uri: this.uri,
      registeredName: await this.registeredName,
    };
  }
}

export default Contact;