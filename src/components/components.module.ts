/// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef } from "angular-maps";
@NgModule({
	declarations: [MapComponent],
	imports: [MapModule.forRootBing(),],
	exports: [MapComponent]
	, providers:
		[
			{ provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory }

		]
})
export class ComponentsModule { }
export function MapServiceProviderFactory() {
	let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
	bc.apiKey = "AlNStI4zlV2ljxfbF06gBMyXjUgzWnedwDn4yyCNpSWpdwCUKQ3KuGrNkdzczbMs"; // your bing map key
	bc.branch = "experimental";
	// to use the experimental bing brach. There are some bug fixes for
	// clustering in that branch you will need if you want to use 
	// clustering.
	return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}
