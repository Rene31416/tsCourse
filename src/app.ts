///<reference path = "models/drag-drop-interfaces.ts"/>
///<reference path = "models/project-model.ts" />
///<reference path = "state/project-state.ts" />
///<reference path = "util/validation.ts" />
///<reference path = "decorator/autobind-decorator.ts" />
///<reference path = "components/project-input.ts" />
///<reference path = "components/project-list.ts" />

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
