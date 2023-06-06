//Component Bse Class
//with abstract keyWord we make sure you cant instace this class, just use it by inherence

namespace App {
  export abstract class Component<
    T extends HTMLElement,
    U extends HTMLElement
  > {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(
      templateID: string,
      hostElementId: string,
      insertAtStart: boolean,
      newElementId?: string
    ) {
      this.templateElement = document.getElementById(
        templateID
      )! as HTMLTemplateElement;
      this.hostElement = document.getElementById(hostElementId)! as T;

      const importedNode = document.importNode(
        this.templateElement.content,
        true
      );
      this.element = importedNode.firstElementChild as U;
      if (newElementId) {
        this.element.id = newElementId;
      }
      this.attach(insertAtStart);
    }
    private attach(insertAtBeggining: boolean) {
      this.hostElement.insertAdjacentElement(
        insertAtBeggining ? "afterbegin" : "beforeend",
        this.element
      );
    }
    abstract configure(): void;
    abstract renderContent(): void;
  }
}
