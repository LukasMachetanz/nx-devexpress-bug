import { createComponentFactory } from "@ngneat/spectator";
import { DxDataGridModule } from "devextreme-angular";
import { FeatureXxxComponent } from './feature-xxx.component';

describe('FeatureXxxComponent', () => {
  const createComponent = createComponentFactory({
    component: FeatureXxxComponent,
    imports: [DxDataGridModule]
  });

  it("test feature-xxx", () => {
    createComponent();

    expect(true).toBeTrue();
  })
});
