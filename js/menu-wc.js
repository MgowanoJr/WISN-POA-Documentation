'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">wisn-poa documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ddc67e509794d265a50d431d78c4d274"' : 'data-target="#xs-components-links-module-AppModule-ddc67e509794d265a50d431d78c4d274"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ddc67e509794d265a50d431d78c4d274"' :
                                            'id="xs-components-links-module-AppModule-ddc67e509794d265a50d431d78c4d274"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrgUnitFilterModule.html" data-type="entity-link">OrgUnitFilterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' : 'data-target="#xs-components-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' :
                                            'id="xs-components-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' }>
                                            <li class="link">
                                                <a href="components/MultiselectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MultiselectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrgUnitFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrgUnitFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' : 'data-target="#xs-directives-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' :
                                        'id="xs-directives-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' }>
                                        <li class="link">
                                            <a href="directives/ClickOutsideDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickOutsideDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' : 'data-target="#xs-injectables-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' :
                                        'id="xs-injectables-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' }>
                                        <li class="link">
                                            <a href="injectables/OrgUnitService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>OrgUnitService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' : 'data-target="#xs-pipes-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' :
                                            'id="xs-pipes-links-module-OrgUnitFilterModule-aff136fdf2889b8a4f4055730a11a7ca"' }>
                                            <li class="link">
                                                <a href="pipes/FilterLevelPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterLevelPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PeriodFilterModule.html" data-type="entity-link">PeriodFilterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PeriodFilterModule-b0ebbe3fd3241e997a37829bef4128a8"' : 'data-target="#xs-components-links-module-PeriodFilterModule-b0ebbe3fd3241e997a37829bef4128a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PeriodFilterModule-b0ebbe3fd3241e997a37829bef4128a8"' :
                                            'id="xs-components-links-module-PeriodFilterModule-b0ebbe3fd3241e997a37829bef4128a8"' }>
                                            <li class="link">
                                                <a href="components/PeriodFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PeriodFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PeriodFilterModule-b0ebbe3fd3241e997a37829bef4128a8"' : 'data-target="#xs-injectables-links-module-PeriodFilterModule-b0ebbe3fd3241e997a37829bef4128a8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PeriodFilterModule-b0ebbe3fd3241e997a37829bef4128a8"' :
                                        'id="xs-injectables-links-module-PeriodFilterModule-b0ebbe3fd3241e997a37829bef4128a8"' }>
                                        <li class="link">
                                            <a href="injectables/PeriodService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PeriodService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PoaModule.html" data-type="entity-link">PoaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PoaModule-a9830306d4f643c4b2d71723cd77e733"' : 'data-target="#xs-components-links-module-PoaModule-a9830306d4f643c4b2d71723cd77e733"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PoaModule-a9830306d4f643c4b2d71723cd77e733"' :
                                            'id="xs-components-links-module-PoaModule-a9830306d4f643c4b2d71723cd77e733"' }>
                                            <li class="link">
                                                <a href="components/StandardPackageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StandardPackageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PoaRoutingModule.html" data-type="entity-link">PoaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RoutingModule.html" data-type="entity-link">RoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SetupModule.html" data-type="entity-link">SetupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SetupModule-550de3c9b8b65a06083e7804c8869e66"' : 'data-target="#xs-components-links-module-SetupModule-550de3c9b8b65a06083e7804c8869e66"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SetupModule-550de3c9b8b65a06083e7804c8869e66"' :
                                            'id="xs-components-links-module-SetupModule-550de3c9b8b65a06083e7804c8869e66"' }>
                                            <li class="link">
                                                <a href="components/SetupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SetupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SetupNotificationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SetupNotificationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SetupRoutingModule.html" data-type="entity-link">SetupRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' : 'data-target="#xs-components-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' :
                                            'id="xs-components-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' }>
                                            <li class="link">
                                                <a href="components/InputFieldComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputFieldComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoDataErrorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoDataErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaginationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaginationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopNotificationBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PopNotificationBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgressBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressLoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgressLoaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' : 'data-target="#xs-directives-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' :
                                        'id="xs-directives-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' }>
                                        <li class="link">
                                            <a href="directives/ClickOutsideDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickOutsideDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' : 'data-target="#xs-injectables-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' :
                                        'id="xs-injectables-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' }>
                                        <li class="link">
                                            <a href="injectables/CurrentUserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CurrentUserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HttpClientService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HttpClientService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ManifestService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ManifestService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' : 'data-target="#xs-pipes-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' :
                                            'id="xs-pipes-links-module-SharedModule-6c14bd88bd18c28d78892799e4a96b53"' }>
                                            <li class="link">
                                                <a href="pipes/FilterByNamePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterByNamePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterByNotInPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterByNotInPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterDataTable.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterDataTable</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/KNumberPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KNumberPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SafeHtmlPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafeHtmlPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SumByPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SumByPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WisnModule.html" data-type="entity-link">WisnModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WisnModule-3dfef879c41a1f63775f37d249530db1"' : 'data-target="#xs-components-links-module-WisnModule-3dfef879c41a1f63775f37d249530db1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WisnModule-3dfef879c41a1f63775f37d249530db1"' :
                                            'id="xs-components-links-module-WisnModule-3dfef879c41a1f63775f37d249530db1"' }>
                                            <li class="link">
                                                <a href="components/WisnReportPaginationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WisnReportPaginationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WisnRoutingModule.html" data-type="entity-link">WisnRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CostAssumptionsComponent.html" data-type="entity-link">CostAssumptionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomFormComponent.html" data-type="entity-link">CustomFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DecideSurplusComponent.html" data-type="entity-link">DecideSurplusComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DistributeHrhComponent.html" data-type="entity-link">DistributeHrhComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HmisHrhComponent.html" data-type="entity-link">HmisHrhComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link">HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HrhComponent.html" data-type="entity-link">HrhComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PoaSettingsComponent.html" data-type="entity-link">PoaSettingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PresetValuesComponent.html" data-type="entity-link">PresetValuesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PriReportComponent.html" data-type="entity-link">PriReportComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RedistributeCurrentHrhComponent.html" data-type="entity-link">RedistributeCurrentHrhComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WisnReportComponent.html" data-type="entity-link">WisnReportComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WisnReportTableComponent.html" data-type="entity-link">WisnReportTableComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/ClickOutsideDirective-1.html" data-type="entity-link">ClickOutsideDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ActivateOrgUnitForEntry.html" data-type="entity-link">ActivateOrgUnitForEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddGeneralConfiguration.html" data-type="entity-link">AddGeneralConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddGeneralConfigurations.html" data-type="entity-link">AddGeneralConfigurations</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddGlobalFilterAction.html" data-type="entity-link">AddGlobalFilterAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddHRHprogramDataValues.html" data-type="entity-link">AddHRHprogramDataValues</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddOrgUnitsActions.html" data-type="entity-link">AddOrgUnitsActions</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddPoaCostAssumption.html" data-type="entity-link">AddPoaCostAssumption</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddPoaCostAssumptionProgram.html" data-type="entity-link">AddPoaCostAssumptionProgram</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddPoaCostAssumptions.html" data-type="entity-link">AddPoaCostAssumptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddPoaDecidedSurplus.html" data-type="entity-link">AddPoaDecidedSurplus</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddPoaDecidedSurpluss.html" data-type="entity-link">AddPoaDecidedSurpluss</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddPoaPriList.html" data-type="entity-link">AddPoaPriList</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddPoaPriLists.html" data-type="entity-link">AddPoaPriLists</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSetupEnvironment.html" data-type="entity-link">AddSetupEnvironment</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddSetupEnvironments.html" data-type="entity-link">AddSetupEnvironments</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddWisnHmisData.html" data-type="entity-link">AddWisnHmisData</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddWisnHmisDatas.html" data-type="entity-link">AddWisnHmisDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddWisnHrhData.html" data-type="entity-link">AddWisnHrhData</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddWisnHrhDataElements.html" data-type="entity-link">AddWisnHrhDataElements</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddWisnHrhDatas.html" data-type="entity-link">AddWisnHrhDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddWisnPoaPages.html" data-type="entity-link">AddWisnPoaPages</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddWisnPresetValue.html" data-type="entity-link">AddWisnPresetValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddWisnPresetValues.html" data-type="entity-link">AddWisnPresetValues</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddWisnReport.html" data-type="entity-link">AddWisnReport</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddWisnReports.html" data-type="entity-link">AddWisnReports</a>
                            </li>
                            <li class="link">
                                <a href="classes/AngularIndexedDB.html" data-type="entity-link">AngularIndexedDB</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApplyAutoConstraintsOnPRIstate.html" data-type="entity-link">ApplyAutoConstraintsOnPRIstate</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApplyAutoConstraintsOnPRIstateRedistribute.html" data-type="entity-link">ApplyAutoConstraintsOnPRIstateRedistribute</a>
                            </li>
                            <li class="link">
                                <a href="classes/Back.html" data-type="entity-link">Back</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckingPoaCostAssumptionsState.html" data-type="entity-link">CheckingPoaCostAssumptionsState</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckingPoaDecidedSurplusState.html" data-type="entity-link">CheckingPoaDecidedSurplusState</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckingPoaPriState.html" data-type="entity-link">CheckingPoaPriState</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckingWisnHmisState.html" data-type="entity-link">CheckingWisnHmisState</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckingWisnHRHState.html" data-type="entity-link">CheckingWisnHRHState</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckingWisnOutputs.html" data-type="entity-link">CheckingWisnOutputs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckSetupEnvironments.html" data-type="entity-link">CheckSetupEnvironments</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckWisnReportState.html" data-type="entity-link">CheckWisnReportState</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearGeneralConfigurations.html" data-type="entity-link">ClearGeneralConfigurations</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearPoaCostAssumptions.html" data-type="entity-link">ClearPoaCostAssumptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearPoaDecidedSurpluss.html" data-type="entity-link">ClearPoaDecidedSurpluss</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearPoaPriLists.html" data-type="entity-link">ClearPoaPriLists</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearWisnHmisDatas.html" data-type="entity-link">ClearWisnHmisDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearWisnHrhDatas.html" data-type="entity-link">ClearWisnHrhDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearWisnPoaPages.html" data-type="entity-link">ClearWisnPoaPages</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearWisnPresetValues.html" data-type="entity-link">ClearWisnPresetValues</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClearWisnReports.html" data-type="entity-link">ClearWisnReports</a>
                            </li>
                            <li class="link">
                                <a href="classes/CollectingSurplus.html" data-type="entity-link">CollectingSurplus</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompletedApplyingAutoConstraintsOnPRIstate.html" data-type="entity-link">CompletedApplyingAutoConstraintsOnPRIstate</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompletedApplyingAutoConstraintsOnPRIstateRedistribute.html" data-type="entity-link">CompletedApplyingAutoConstraintsOnPRIstateRedistribute</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompleteDownLaodWisnHmisData.html" data-type="entity-link">CompleteDownLaodWisnHmisData</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompleteDownloadingWisnHrhDatas.html" data-type="entity-link">CompleteDownloadingWisnHrhDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompleteDownloadPoaPriLists.html" data-type="entity-link">CompleteDownloadPoaPriLists</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompleteDownLoadWisnReport.html" data-type="entity-link">CompleteDownLoadWisnReport</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompleteUploadingWisnHrhDatas.html" data-type="entity-link">CompleteUploadingWisnHrhDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompleteUpLoadingWisnReport.html" data-type="entity-link">CompleteUpLoadingWisnReport</a>
                            </li>
                            <li class="link">
                                <a href="classes/CostAssumptionsLoadMaxHRHFromPRIlist.html" data-type="entity-link">CostAssumptionsLoadMaxHRHFromPRIlist</a>
                            </li>
                            <li class="link">
                                <a href="classes/CostAssumputionsDataProgressLoader.html" data-type="entity-link">CostAssumputionsDataProgressLoader</a>
                            </li>
                            <li class="link">
                                <a href="classes/CostAssumputionsMaxNumberHRH.html" data-type="entity-link">CostAssumputionsMaxNumberHRH</a>
                            </li>
                            <li class="link">
                                <a href="classes/CostAssumputionsSalaryCost.html" data-type="entity-link">CostAssumputionsSalaryCost</a>
                            </li>
                            <li class="link">
                                <a href="classes/DbWrapper.html" data-type="entity-link">DbWrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteGeneralConfiguration.html" data-type="entity-link">DeleteGeneralConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteGeneralConfigurations.html" data-type="entity-link">DeleteGeneralConfigurations</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeletePoaCostAssumption.html" data-type="entity-link">DeletePoaCostAssumption</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeletePoaCostAssumptions.html" data-type="entity-link">DeletePoaCostAssumptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeletePoaDecidedSurplus.html" data-type="entity-link">DeletePoaDecidedSurplus</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeletePoaDecidedSurpluss.html" data-type="entity-link">DeletePoaDecidedSurpluss</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeletePoaPriList.html" data-type="entity-link">DeletePoaPriList</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeletePoaPriLists.html" data-type="entity-link">DeletePoaPriLists</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteSetupEnvironments.html" data-type="entity-link">DeleteSetupEnvironments</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteWisnHmisData.html" data-type="entity-link">DeleteWisnHmisData</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteWisnHmisDatas.html" data-type="entity-link">DeleteWisnHmisDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteWisnHrhData.html" data-type="entity-link">DeleteWisnHrhData</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteWisnHrhDatas.html" data-type="entity-link">DeleteWisnHrhDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteWisnPoaPages.html" data-type="entity-link">DeleteWisnPoaPages</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteWisnReport.html" data-type="entity-link">DeleteWisnReport</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteWisnReports.html" data-type="entity-link">DeleteWisnReports</a>
                            </li>
                            <li class="link">
                                <a href="classes/DownLaodWisnHmisData.html" data-type="entity-link">DownLaodWisnHmisData</a>
                            </li>
                            <li class="link">
                                <a href="classes/DownloadingWisnHrhDatas.html" data-type="entity-link">DownloadingWisnHrhDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/DownloadPoaPriLists.html" data-type="entity-link">DownloadPoaPriLists</a>
                            </li>
                            <li class="link">
                                <a href="classes/DownLoadWisnReport.html" data-type="entity-link">DownLoadWisnReport</a>
                            </li>
                            <li class="link">
                                <a href="classes/FailLoadWisnPoaPages.html" data-type="entity-link">FailLoadWisnPoaPages</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchingPoaPRIStateDraft.html" data-type="entity-link">FetchingPoaPRIStateDraft</a>
                            </li>
                            <li class="link">
                                <a href="classes/Forward.html" data-type="entity-link">Forward</a>
                            </li>
                            <li class="link">
                                <a href="classes/GlobalFilterUpdateAction.html" data-type="entity-link">GlobalFilterUpdateAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/Go.html" data-type="entity-link">Go</a>
                            </li>
                            <li class="link">
                                <a href="classes/HmisDataProgressLoader.html" data-type="entity-link">HmisDataProgressLoader</a>
                            </li>
                            <li class="link">
                                <a href="classes/InstallSetupEnvironments.html" data-type="entity-link">InstallSetupEnvironments</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadCadresAction.html" data-type="entity-link">LoadCadresAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadCurrentUserAction.html" data-type="entity-link">LoadCurrentUserAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadCurrentUserFailAction.html" data-type="entity-link">LoadCurrentUserFailAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadCurrentUserSuccessAction.html" data-type="entity-link">LoadCurrentUserSuccessAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadGeneralConfigurations.html" data-type="entity-link">LoadGeneralConfigurations</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadHRHprogramData.html" data-type="entity-link">LoadHRHprogramData</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadInitialConfigAction.html" data-type="entity-link">LoadInitialConfigAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadOrgUnitAction.html" data-type="entity-link">LoadOrgUnitAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadPoaCostAssumptions.html" data-type="entity-link">LoadPoaCostAssumptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadPoaCostAssumptionsProgram.html" data-type="entity-link">LoadPoaCostAssumptionsProgram</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadPoaDecidedSurpluss.html" data-type="entity-link">LoadPoaDecidedSurpluss</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadPoaPriLists.html" data-type="entity-link">LoadPoaPriLists</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadSetupEnvironment.html" data-type="entity-link">LoadSetupEnvironment</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadWISNdataAction.html" data-type="entity-link">LoadWISNdataAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadWisnHmisDatas.html" data-type="entity-link">LoadWisnHmisDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadWisnHrhDatas.html" data-type="entity-link">LoadWisnHrhDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadWisnPoaPages.html" data-type="entity-link">LoadWisnPoaPages</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadWisnPresetValues.html" data-type="entity-link">LoadWisnPresetValues</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadWisnReports.html" data-type="entity-link">LoadWisnReports</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoChangesOnDecidedSurplusState.html" data-type="entity-link">NoChangesOnDecidedSurplusState</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoChangesOnPoaCostAssumptionsState.html" data-type="entity-link">NoChangesOnPoaCostAssumptionsState</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoChangesOnPoaPRIState.html" data-type="entity-link">NoChangesOnPoaPRIState</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoChangesOnWisnHmisState.html" data-type="entity-link">NoChangesOnWisnHmisState</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoChangesOnWisnHRHState.html" data-type="entity-link">NoChangesOnWisnHRHState</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoChangesOnWisnReport.html" data-type="entity-link">NoChangesOnWisnReport</a>
                            </li>
                            <li class="link">
                                <a href="classes/POAcostAssumputionsErrorHandler.html" data-type="entity-link">POAcostAssumputionsErrorHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PreLoadWisnPresetValue.html" data-type="entity-link">PreLoadWisnPresetValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/PresetValuesDataProgressLoader.html" data-type="entity-link">PresetValuesDataProgressLoader</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetCostAssumptionsNotification.html" data-type="entity-link">ResetCostAssumptionsNotification</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetDecidedSurplusNotification.html" data-type="entity-link">ResetDecidedSurplusNotification</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetHmisDataNotification.html" data-type="entity-link">ResetHmisDataNotification</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetHmiState.html" data-type="entity-link">ResetHmiState</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPoaPriList.html" data-type="entity-link">ResetPoaPriList</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPriListNotification.html" data-type="entity-link">ResetPriListNotification</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetWisnHrhFormNotification.html" data-type="entity-link">ResetWisnHrhFormNotification</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetWisnPresetValueNotification.html" data-type="entity-link">ResetWisnPresetValueNotification</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetWisnReportNotification.html" data-type="entity-link">ResetWisnReportNotification</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouteSerializer.html" data-type="entity-link">RouteSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/SavingPoaPRIStateDraft.html" data-type="entity-link">SavingPoaPRIStateDraft</a>
                            </li>
                            <li class="link">
                                <a href="classes/SuccessfulLoadWisnPoaPages.html" data-type="entity-link">SuccessfulLoadWisnPoaPages</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCollectingSurplusSummary.html" data-type="entity-link">UpdateCollectingSurplusSummary</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatedPoaDecidedSurplusSummary.html" data-type="entity-link">UpdatedPoaDecidedSurplusSummary</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGeneralConfiguration.html" data-type="entity-link">UpdateGeneralConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGeneralConfigurations.html" data-type="entity-link">UpdateGeneralConfigurations</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGlobalFilterAction.html" data-type="entity-link">UpdateGlobalFilterAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePoaCostAssumption.html" data-type="entity-link">UpdatePoaCostAssumption</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePoaCostAssumptions.html" data-type="entity-link">UpdatePoaCostAssumptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePoaDecidedSurplus.html" data-type="entity-link">UpdatePoaDecidedSurplus</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePoaDecidedSurpluss.html" data-type="entity-link">UpdatePoaDecidedSurpluss</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePoaDecidedSurplusSummary.html" data-type="entity-link">UpdatePoaDecidedSurplusSummary</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePoaPriList.html" data-type="entity-link">UpdatePoaPriList</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePoaPriListFromDecidedSurplus.html" data-type="entity-link">UpdatePoaPriListFromDecidedSurplus</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePoaPriLists.html" data-type="entity-link">UpdatePoaPriLists</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSetupEnvironment.html" data-type="entity-link">UpdateSetupEnvironment</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSetupEnvironments.html" data-type="entity-link">UpdateSetupEnvironments</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateVisitedPageAction.html" data-type="entity-link">UpdateVisitedPageAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWisnFormDesign.html" data-type="entity-link">UpdateWisnFormDesign</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWisnHmisData.html" data-type="entity-link">UpdateWisnHmisData</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWisnHmisDatas.html" data-type="entity-link">UpdateWisnHmisDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWisnHrhData.html" data-type="entity-link">UpdateWisnHrhData</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWisnHrhDatas.html" data-type="entity-link">UpdateWisnHrhDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWisnPoaPages.html" data-type="entity-link">UpdateWisnPoaPages</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWisnPresetValue.html" data-type="entity-link">UpdateWisnPresetValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWisnPresetValues.html" data-type="entity-link">UpdateWisnPresetValues</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWisnReport.html" data-type="entity-link">UpdateWisnReport</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWisnReportFromDataValues.html" data-type="entity-link">UpdateWisnReportFromDataValues</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWisnReports.html" data-type="entity-link">UpdateWisnReports</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatingPoaCostAssumptionsProgram.html" data-type="entity-link">UpdatingPoaCostAssumptionsProgram</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatingPoaPriList.html" data-type="entity-link">UpdatingPoaPriList</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatingPoaPriListFromDecidedSurplus.html" data-type="entity-link">UpdatingPoaPriListFromDecidedSurplus</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatingWisnHRHData.html" data-type="entity-link">UpdatingWisnHRHData</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadingWisnHrhDatas.html" data-type="entity-link">UploadingWisnHrhDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadWisnHmisDatas.html" data-type="entity-link">UploadWisnHmisDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadWisnPresetValue.html" data-type="entity-link">UploadWisnPresetValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadWisnReport.html" data-type="entity-link">UploadWisnReport</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertGeneralConfiguration.html" data-type="entity-link">UpsertGeneralConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertGeneralConfigurations.html" data-type="entity-link">UpsertGeneralConfigurations</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertPoaCostAssumption.html" data-type="entity-link">UpsertPoaCostAssumption</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertPoaCostAssumptions.html" data-type="entity-link">UpsertPoaCostAssumptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertPoaDecidedSurplus.html" data-type="entity-link">UpsertPoaDecidedSurplus</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertPoaDecidedSurpluss.html" data-type="entity-link">UpsertPoaDecidedSurpluss</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertPoaPriList.html" data-type="entity-link">UpsertPoaPriList</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertPoaPriLists.html" data-type="entity-link">UpsertPoaPriLists</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertSetupEnvironment.html" data-type="entity-link">UpsertSetupEnvironment</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertSetupEnvironments.html" data-type="entity-link">UpsertSetupEnvironments</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertWisnHmisData.html" data-type="entity-link">UpsertWisnHmisData</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertWisnHmisDatas.html" data-type="entity-link">UpsertWisnHmisDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertWisnHrhData.html" data-type="entity-link">UpsertWisnHrhData</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertWisnHrhDatas.html" data-type="entity-link">UpsertWisnHrhDatas</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertWisnPoaPages.html" data-type="entity-link">UpsertWisnPoaPages</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertWisnPresetValue.html" data-type="entity-link">UpsertWisnPresetValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertWisnPresetValues.html" data-type="entity-link">UpsertWisnPresetValues</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertWisnReport.html" data-type="entity-link">UpsertWisnReport</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertWisnReports.html" data-type="entity-link">UpsertWisnReports</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utils.html" data-type="entity-link">Utils</a>
                            </li>
                            <li class="link">
                                <a href="classes/WisnDataUpdateInBackground.html" data-type="entity-link">WisnDataUpdateInBackground</a>
                            </li>
                            <li class="link">
                                <a href="classes/WisnErrorHandler.html" data-type="entity-link">WisnErrorHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/WisnHMISErrorHandler.html" data-type="entity-link">WisnHMISErrorHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/WisnHRHErrorHandler.html" data-type="entity-link">WisnHRHErrorHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/WisnProgressLoaderUpdate.html" data-type="entity-link">WisnProgressLoaderUpdate</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CurrentUserEffects.html" data-type="entity-link">CurrentUserEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrentUserService.html" data-type="entity-link">CurrentUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeneralConfigurationEffects.html" data-type="entity-link">GeneralConfigurationEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalFilterEffects.html" data-type="entity-link">GlobalFilterEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpClientService.html" data-type="entity-link">HttpClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link">LocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageServiceCreator.html" data-type="entity-link">LocalStorageServiceCreator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ManifestService.html" data-type="entity-link">ManifestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PoaAnalyticsService.html" data-type="entity-link">PoaAnalyticsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PoaCostAssumptionEffect.html" data-type="entity-link">PoaCostAssumptionEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PoaDecidedSurplusEffects.html" data-type="entity-link">PoaDecidedSurplusEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PoaPRIlistEffects.html" data-type="entity-link">PoaPRIlistEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterEffects.html" data-type="entity-link">RouterEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SetupEnvironmentEffects.html" data-type="entity-link">SetupEnvironmentEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VisualizationExportService.html" data-type="entity-link">VisualizationExportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WisnAnalyticsService.html" data-type="entity-link">WisnAnalyticsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WisnHmisDataEffects.html" data-type="entity-link">WisnHmisDataEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WisnHrhDataEffects.html" data-type="entity-link">WisnHrhDataEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WisnPoaPagesEffects.html" data-type="entity-link">WisnPoaPagesEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WisnPoaPageService.html" data-type="entity-link">WisnPoaPageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WisnPresetValuesEffects.html" data-type="entity-link">WisnPresetValuesEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WisnReportEffects.html" data-type="entity-link">WisnReportEffects</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CurrentUser.html" data-type="entity-link">CurrentUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CurrentUserState.html" data-type="entity-link">CurrentUserState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DbMode.html" data-type="entity-link">DbMode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeneralConfiguration.html" data-type="entity-link">GeneralConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GlobalFilter.html" data-type="entity-link">GlobalFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GlobalFilterState.html" data-type="entity-link">GlobalFilterState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IndexDetails.html" data-type="entity-link">IndexDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Manifest.html" data-type="entity-link">Manifest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PoaCostAssumption.html" data-type="entity-link">PoaCostAssumption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PoaDecidedSurplus.html" data-type="entity-link">PoaDecidedSurplus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PoaPriList.html" data-type="entity-link">PoaPriList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouterStateUrl.html" data-type="entity-link">RouterStateUrl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouterStateUrl-1.html" data-type="entity-link">RouterStateUrl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SetupEnvironment.html" data-type="entity-link">SetupEnvironment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-1.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-2.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-3.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-4.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-5.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-6.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-7.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-8.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-9.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-10.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WisnHmisData.html" data-type="entity-link">WisnHmisData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WisnHrhData.html" data-type="entity-link">WisnHrhData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WisnPoaPages.html" data-type="entity-link">WisnPoaPages</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WisnPresetValue.html" data-type="entity-link">WisnPresetValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WisnReport.html" data-type="entity-link">WisnReport</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});