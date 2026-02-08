---
layout: post
title: "Biologically Mediated Indoor Air Systems: Design, Architecture, and Control"
description: "A comprehensive, systems-level exploration of a sealed, biologically mediated indoor air appliance, covering conceptual foundations, product architecture, and zone-wise instrumentation and control logic, with an emphasis on containment, stability, and long-term equilibrium."
keywords:
  - biologically mediated air purification
  - indoor air quality systems
  - microalgae photobioreactor design
  - VOC bio-oxidation
  - sensor-driven control architecture
  - containment-first product design
  - bio-integrated consumer appliances
banner: /assets/images/air_enhancement_system.png
tldr: >
  This work presents a containment-first indoor air system that transforms pollutants through controlled biological processes rather than passive filtration. It details the underlying biological rationale, the translation of those constraints into a manufacturable consumer product, and the conservative, zone-wise instrumentation and control logic required to maintain long-term stability, safety, and predictable behavior.
password_protected: true
password_hint: "Internal draft"

---

# Part I : Conceptual Foundations, System Philosophy, and Biological Rationale

## 1. Introduction: The Indoor Air Problem as a Slow, Chronic Phenomenon

Indoor air quality degradation is not an acute event but a slow, cumulative process driven by continuous human occupancy, material off-gassing, and inadequate ventilation. Unlike outdoor air pollution, which is often episodic and regulated at the source, indoor air pollution persists quietly, manifesting through elevated carbon dioxide concentrations, low-level volatile organic compounds (VOCs), and fine particulate matter that accumulate over hours and days rather than minutes. Numerous studies have demonstrated that indoor CO₂ concentrations in occupied bedrooms and offices routinely exceed 1000–1500 ppm, while VOCs such as formaldehyde, toluene, and xylene remain present at chronic low concentrations due to furniture, adhesives, paints, cleaning agents, and synthetic materials.

Conventional air purification technologies primarily address particulate matter through mechanical filtration or gaseous pollutants through adsorption media such as activated carbon. These approaches, while effective within their narrow domains, are inherently passive and consumptive: filters saturate, adsorption sites fill, and the system’s performance declines until a replacement is made. Moreover, such systems do not engage with carbon dioxide at all, nor do they convert pollutants into benign end products. The device architecture described in this report emerges from a fundamentally different philosophy: rather than merely trapping pollutants, it seeks to transform them through controlled biological and biochemical processes, while maintaining strict containment and consumer-grade safety.

## 2. Design Philosophy: Containment, Transformation, and Graceful Degradation

At the core of the system lies a non-negotiable design axiom: no living biological material shall ever be directly exposed to indoor air or to the user. This principle is not merely precautionary; it is foundational for regulatory acceptability, consumer trust, and long-term stability. Every architectural decision—ranging from organism selection to airflow routing and material choice—follows from this axiom.

Rather than adopting open or semi-open biological reactors, which are common in laboratory or industrial contexts, the system employs sealed and immobilized biological interfaces. Transformation of pollutants occurs either on fixed catalytic surfaces (in the case of bacteria) or across controlled gas–liquid interfaces (in the case of algae). In doing so, the system eliminates bioaerosol pathways, prevents uncontrolled growth, and ensures that any system failure results in loss of function rather than emergence of hazard. This concept of graceful degradation—where biological activity simply slows or ceases without producing harmful by-products—is central to the system’s safety profile.

## 3. Multi-Stage Architecture as a Necessity, Not an Optimization

The system is intentionally structured as a vertically staged process, with each stage addressing a fundamentally different class of indoor air constituents. Fine particulates, volatile organic compounds, and carbon dioxide are governed by distinct physical and chemical principles; attempting to address all three within a single mechanism invariably leads to inefficiency or overclaiming. Accordingly, the system is divided into four vertically stacked zones, through which air flows from bottom to top under controlled negative pressure.

The first stage addresses particulate matter through washable mechanical filtration, reducing PM₁₀ and a portion of PM₂.₅ while protecting downstream biological components from fouling. The second stage introduces a bio-oxidative chamber in which VOCs are enzymatically mineralized by immobilized bacteria. The third stage enables photosynthetic gas exchange with a sealed algal culture, allowing carbon dioxide reduction and oxygen release. The final stage polishes the air through a top-mounted particulate filter and regulates exhaust via controlled fans, ensuring that no unfiltered air is ever released into the environment.

This sequential architecture is not arbitrary. It reflects the thermodynamic and biological ordering of processes: solids must be removed before gases can be treated enzymatically, and carbon dioxide generated during VOC oxidation is subsequently consumed by photosynthesis. In effect, the system establishes a micro-scale carbon loop within the device itself.

## 4. Algal Component Selection: Why Chlorella vulgaris and Scenedesmus

The photosynthetic component of the system relies on two green microalgae: Chlorella vulgaris as the primary organism and Scenedesmus species as a secondary stabilizing organism. These species were selected not for novelty or maximal productivity, but for predictability, safety, and long-term resilience under sealed, low-flux conditions.

Chlorella vulgaris is among the most extensively studied microalgae in both nutritional and environmental contexts. It is non-toxic, does not produce volatile secondary metabolites, and exhibits robust photosynthetic activity across a wide range of light intensities, temperatures, and carbon dioxide concentrations. Importantly, Chlorella tolerates low nutrient availability and can persist in maintenance metabolism for extended periods, making it suitable for lifetime-sealed applications where nutrient replenishment is intentionally limited.

Scenedesmus species complement Chlorella by providing ecological redundancy. Their thicker cell walls and greater tolerance to fluctuating CO₂ levels reduce the likelihood of population collapse under transient stress. In mixed culture, Scenedesmus acts as a buffering organism, stabilizing photosynthetic output and mitigating the risks associated with monoculture systems. From a regulatory and safety perspective, this redundancy is advantageous, as it reduces dependence on a single biological failure point.

## 5. Photosynthetic Mechanisms and Gas Exchange Dynamics

The photosynthetic conversion occurring within the algal chamber follows the canonical light-driven reactions of oxygenic photosynthesis. In the light reactions, photons absorbed by chlorophyll drive the splitting of water molecules, releasing molecular oxygen and generating the electrochemical gradients required for ATP and NADPH production. These energy carriers fuel the Calvin cycle, in which carbon dioxide is enzymatically fixed into organic carbon compounds.

Crucially, this process is inherently slow and enzyme-limited at indoor carbon dioxide concentrations. This slowness is not a limitation but a feature: it prevents runaway growth, reduces thermal stress, and aligns the system’s temporal behavior with the slow dynamics of indoor CO₂ accumulation. The algal chamber is therefore not designed for maximal biomass production, but for steady, low-rate carbon fixation that incrementally offsets human CO₂ emissions over extended periods.

Gas exchange between air and algae occurs exclusively at the liquid surface within a sealed headspace. Air is introduced and removed through top-mounted tubes fitted with hydrophobic, gas-permeable barriers that block liquid water and aerosols. Carbon dioxide diffuses from the headspace into the liquid according to partial pressure gradients, while oxygen produced by photosynthesis diffuses in the opposite direction. At no point does bulk air enter the liquid, nor does liquid contact the airflow directly. This headspace-only exchange preserves containment while allowing controlled modulation of gas availability.

## 6. Bacterial Component Selection: Enzymatic VOC Mineralization

While algae excel at carbon dioxide fixation, they are poorly suited to degrading complex organic vapors. Indoor VOCs such as formaldehyde and aromatic hydrocarbons require oxidative enzymatic pathways that are absent or inefficient in photosynthetic organisms. For this reason, a dedicated bacterial stage is incorporated upstream of the algal chamber.

The system employs Pseudomonas putida as the primary VOC-degrading organism, supplemented by selected Rhodococcus species. Both genera are well-characterized environmental heterotrophs with extensive histories in bioremediation research. They are classified as biosafety level 1 organisms and are non-pathogenic under normal environmental conditions.

Within the bio-active chamber, these bacteria are immobilized on porous ceramic beads, forming thin, internal biofilms. Immobilization converts the bacteria from free-living organisms into fixed biocatalysts, eliminating the possibility of aerosolization or uncontrolled proliferation. As VOC-laden air passes through the bead bed, organic molecules dissolve into the thin moisture films lining the pores, where bacterial enzymes oxidize them stepwise into carbon dioxide and water. Aromatic compounds undergo ring activation and cleavage before entering central metabolic pathways, while simpler aldehydes such as formaldehyde are rapidly converted through dehydrogenase-mediated reactions.

The end products of these reactions are chemically benign and gaseous, and the small amounts of carbon dioxide produced are subsequently available for photosynthetic uptake in the algal stage. In this way, the bacterial chamber does not merely remove VOCs but integrates into the system’s internal carbon balance.

## 7. Containment and Light Isolation of the Bio-Active Chamber

A defining feature of the bacterial stage is its complete optical isolation. Exposure to light can alter bacterial metabolic pathways, induce stress responses, and destabilize enzyme expression. To prevent such effects, the bio-active chamber is enclosed within an opaque housing, and all air ingress and egress paths are configured as labyrinthine channels that permit airflow while blocking photon transmission.

The chamber contains no free liquid. Moisture is retained solely through adsorption within the ceramic bead matrix, maintaining enzyme activity without introducing condensation or pooling. Any potential condensate migrates downward under gravity, away from sensitive components. The result is a dark, dry, gas-permeable environment optimized for slow, stable enzymatic oxidation rather than rapid microbial growth.

## 8. Regulatory Risk Posture: Designing for Non-Exposure

From a regulatory perspective, the principal risks associated with biological air treatment devices are bioaerosol emission, user exposure to microorganisms, and generation of secondary pollutants. The system described here addresses these concerns at the architectural level rather than through procedural controls.

First, there is no direct exposure pathway: bacteria are immobilized and sealed; algae are contained within a closed liquid chamber; and all exhaust air passes through a final particulate filter before re-entering the room. Second, no secondary chemical species such as ozone, nitrogen oxides, or reactive radicals are produced, as all transformations terminate in carbon dioxide, water, and oxygen. Third, user interaction with biological components is entirely eliminated. Maintenance activities are limited to mechanical filter cleaning and replacement of non-biological consumables.

As a result, the system can be positioned not as a medical or biotechnological device, but as a decorative indoor air quality enhancement appliance, significantly reducing regulatory burden while maintaining scientific integrity.





## Part II - Product Design Architecture and Physical Realization  
*Translating Biological Constraints into a Manufacturable Indoor Device*

## 9. From Biological System to Consumer Object: Design Translation Principles

Designing a consumer-facing product that embeds living biological systems is not an exercise in miniaturization alone; it is an exercise in constraint translation. The biological system described in Part I imposes strict requirements—containment, light control, humidity stability, gas-only interfaces, and fail-safe degradation—that must be honored at every level of physical design. The product architecture therefore begins not with aesthetics, but with a careful mapping of biological requirements onto mechanical, optical, and structural domains.

The resulting object is not “a lamp with biology inside,” but rather a vertically stratified reactor system that happens to present itself as a lamp. The lamp form factor is chosen precisely because it allows tall vertical separation of functions, passive gravitational safety, and optical concealment of technical components, all while remaining socially acceptable within domestic spaces.

## 10. Macro Form Factor and Structural Envelope

The device is designed as a vertical cylindrical structure, with a height-to-diameter ratio that emphasizes stability and airflow stratification. The outer envelope consists of a double-layer construction: an external structural shell and an internal load-bearing spine. This separation allows the outer shell to serve primarily aesthetic and optical roles, while the internal spine manages airflow channels, component mounting, and vibration isolation.

The outer shell is composed of borosilicate or tempered glass, selected for its optical clarity, chemical inertness, and resistance to thermal stress from internal lighting. Glass serves a critical psychological function as well: it communicates cleanliness, containment, and separation, which is essential when the product incorporates living systems. Internally, opaque structural elements made from polymer composites or anodized aluminum define the zones and prevent unwanted light transmission.

The base of the device is deliberately over-weighted using a metal ballast to lower the center of gravity. This is not merely for tip resistance; it also reduces vibrational coupling between the fan assemblies and the biological chambers, which is essential for long-term biofilm stability in the bacterial cartridge and for preventing shear stress in the algal liquid.

## 11. Vertical Zoning as a Safety and Performance Strategy

The internal structure is divided into four vertically stacked zones, each physically isolated but aerodynamically connected. This zoning is not a convenience; it is the primary safety mechanism of the system.

The lowest zone houses the intake, bottom particulate filter, and primary airflow driver. Placing this zone at the bottom ensures that any particulate ingress, accidental moisture condensation, or user interaction occurs as far away as possible from the biological components. Gravity ensures that contaminants migrate downward rather than upward into sensitive regions.

Above this lies the bio-active VOC oxidation zone. Its intermediate placement serves two purposes: it ensures that incoming air has already been mechanically cleaned, reducing fouling of the bacterial media, and it allows carbon dioxide generated by VOC oxidation to be immediately available for uptake in the algal stage above.

The algal photobioreactor occupies the central visual mass of the device. This placement is intentional. It maximizes the available surface area for light delivery and gas exchange while allowing the biological component to double as the primary visual element. Importantly, the algal chamber is structurally isolated from both the intake and exhaust zones, ensuring that even in the event of upstream or downstream failures, liquid containment is preserved.

The topmost zone contains the final particulate polishing filter and exhaust fans. Locating these components at the top ensures that all air exiting the device has traversed every purification stage, and that any internal leaks result in inward air ingress rather than outward emission.

## 12. Airflow Path Design and Pressure Hierarchy

The airflow architecture is designed around a negative-pressure hierarchy, meaning that pressure progressively decreases from the intake to the exhaust. This approach is borrowed directly from biosafety cabinet design and ensures that no unfiltered air can escape the system under normal or fault conditions.

Air enters the system through a circumferential intake at the base, passing immediately through a washable depth filter that removes coarse dust and a portion of fine particulates. The airflow is then driven upward by a low-RPM fan that prioritizes static pressure stability over volumetric throughput. This fan does not “push” air through the system; rather, it establishes a controlled pressure gradient that allows downstream fans to pull air through all stages.

Within the bio-active VOC chamber, air is forced through a packed bed of porous ceramic beads. The geometry of this bed is carefully tuned to balance residence time against pressure drop. Excessive velocity would reduce enzymatic contact time, while insufficient velocity would risk uneven moisture distribution. The chamber housing incorporates internal baffles that prevent channeling and ensure uniform exposure across the bead matrix.

After VOC treatment, air is routed toward the algal zone. At this point, the airflow path bifurcates conceptually: one portion continues along the main air channel, while a controlled fraction is diverted into the algal headspace circuit. This diversion is achieved through fixed internal ducts rather than valves, maintaining mechanical simplicity while allowing proportional control through fan speed modulation.

## 13. Algal Chamber Physical Design and Headspace Engineering

The algal photobioreactor is constructed as a sealed glass vessel with a fixed liquid volume and a defined headspace at the top. The glass thickness is selected to withstand internal pressure fluctuations far exceeding those encountered during normal operation, ensuring that even in fault scenarios the chamber remains intact.

The liquid volume is filled during manufacturing with a pre-formulated medium containing water, buffering agents, and nutrients at concentrations deliberately chosen to support maintenance-level metabolism rather than rapid growth. This choice minimizes biomass accumulation, reduces light attenuation over time, and extends the functional lifespan of the chamber.

At the top of the chamber, two stainless steel or polymeric tubes penetrate the glass via permanently bonded fittings. These tubes serve as the air inlet and outlet for the headspace. Critically, each tube is terminated internally with a hydrophobic, gas-permeable barrier that allows gases to pass while blocking liquid water and aerosols. These barriers are rated to withstand pressure differentials well above those generated by the system’s fans, ensuring that liquid cannot be forced into the air path.

Air entering the headspace spreads across the liquid surface, allowing carbon dioxide to dissolve according to Henry’s law. Oxygen produced by photosynthesis diffuses into the headspace and is removed via the outlet tube. At no point does bulk air enter the liquid, and no liquid is atomized or entrained into the airflow. This headspace-only exchange is the linchpin that allows active gas control without violating containment principles.

## 14. Optical Design and Light Management

Light delivery to the algal chamber is achieved through an annular LED array positioned outside the glass vessel. The spectrum is tuned to favor photosynthetically active wavelengths, primarily in the red and blue regions, while minimizing excess heat generation. The LEDs operate continuously at low intensity rather than intermittently at high intensity, a strategy that reduces photoinhibition and thermal cycling stress on the algae.

Optical isolation between zones is achieved through a combination of opaque internal sleeves, reflective baffles, and light-absorbing coatings. The bio-active VOC chamber is completely shielded from light, ensuring stable bacterial metabolism. The intake and exhaust zones are similarly isolated to prevent light leakage that could affect user comfort or create unintended visual cues.

Externally, a diffusing layer softens the emitted light, transforming the internal biological activity into a calm ambient glow rather than a technical display. This optical treatment is not merely aesthetic; it prevents the user from visually inspecting biological components, reinforcing the psychological boundary between appliance and organism.

## 15. Materials, Seals, and Long-Term Integrity

Material selection throughout the device prioritizes chemical inertness, low outgassing, and long-term stability. All components in contact with air are selected to avoid introducing new VOCs, while components in contact with liquid are chosen to resist biofouling and nutrient leaching.

Seals are implemented redundantly in critical locations, particularly around the algal chamber penetrations and the bio-active cartridge interfaces. Elastomeric gaskets are used in conjunction with mechanical compression to ensure airtightness without relying solely on adhesives. This approach accommodates thermal expansion and long-term material creep.

Importantly, no user-accessible fastener or panel provides direct access to any biological component. Even during maintenance operations, the user interacts only with dry mechanical filters. This design choice simplifies regulatory classification and reduces the risk of misuse.

## 16. Maintenance as a Design Constraint

Monthly maintenance is intentionally limited to airflow hygiene. The bottom particulate filter is designed for easy removal, rinsing, and reinsertion without tools. The top polishing filter, while collecting less debris, is similarly accessible. These operations restore airflow performance and reduce mechanical stress on fans but have no direct impact on biological systems.

The bacterial VOC cartridge is designed for annual replacement. Its removal does not expose live bacteria; the cartridge is a sealed unit that, once removed, dries out and becomes biologically inert. Disposal therefore does not require special handling.

The algal chamber, by contrast, is not a consumable. It is designed to persist for the expected lifetime of the device, with gradual performance tapering rather than abrupt failure. This distinction between consumable and permanent biological components is central to the product’s usability and safety profile.

## 17. Product Behavior Under Failure Conditions

A defining feature of the product design is that no single failure mode results in unsafe behavior. If airflow is reduced due to neglected filters, biological activity slows naturally due to reduced gas exchange. If lighting fails, photosynthesis ceases without producing harmful by-products. If the VOC cartridge becomes exhausted, it simply stops oxidizing VOCs rather than releasing anything into the air.

In all cases, the system defaults to a passive state. There is no scenario in which failure leads to biological emission, liquid leakage into airflow, or generation of secondary pollutants. This behavior is not incidental; it is the direct result of designing containment and passivity into every stage.





## Part III : Instrumentation, Sensing, and Control Logic  
*Zone-Wise Interpretation of Signals and System Manipulation Pathways*

## 18. Role of Instrumentation in a Biologically Mediated Appliance

In a system that integrates biological processes into a consumer appliance, instrumentation does not exist to maximize performance in the short term. Its primary role is to maintain the system within a biologically stable, mechanically safe, and chemically predictable envelope. Unlike conventional HVAC or industrial bioreactors, the objective here is not aggressive optimization but long-term equilibrium.

Accordingly, sensors are treated not as direct control levers but as interpreters of physical reality. Each sensor reading acquires meaning only when contextualized within its zone, its adjacent processes, and the system’s slow biological time constants. Control actions are deliberately constrained to a limited set of actuators—airflow, light intensity, and headspace air access—so that sensor inputs cannot push the system into unstable or unsafe states.

## 19. Zone 1 Instrumentation: Intake and Air Conditioning Domain

Zone 1 represents the system’s interface with the indoor environment. Sensors here are concerned not with biology, but with air integrity, loading, and protection of downstream stages.

### 19.1 Differential Pressure Across the Bottom Particulate Filter

The differential pressure sensor spanning the bottom PM filter measures the resistance imposed by accumulated particulate matter. Physically, this signal represents the energy required to pull air through the filter media at a given flow rate. An increasing pressure differential indicates progressive clogging, while an abnormally low differential suggests either filter absence or bypass leakage.

From a control standpoint, this signal does not justify aggressive fan compensation. Increasing airflow to overcome a clogged filter would elevate noise, increase mechanical wear, and potentially starve biological stages of humidity. Instead, the primary translation of this signal is maintenance state recognition. Within defined bounds, minor fan speed adjustment may be used to preserve baseline airflow, but once thresholds are exceeded, the system must favor biological protection over throughput.

Thus, the signal translates to a permission structure: normal operation, degraded but acceptable operation, or user intervention required.

### 19.2 Main Airflow Measurement

The airflow sensor positioned downstream of the intake fan measures the volumetric flow rate entering the biological stages. This signal represents the primary carrier of mass and energy through the system. Airflow governs residence time in the VOC chamber, gas availability for algae, humidity balance, and thermal transport.

Interpreted in isolation, airflow has little meaning; interpreted in conjunction with pressure differentials and fan power, it becomes a diagnostic indicator. A drop in airflow without a corresponding rise in pressure implies fan degradation or obstruction. A rise in airflow accompanied by pressure instability implies leakage or mis-sealing.

Control actions derived from airflow data are conservative. Fan speed modulation is used to maintain airflow within a biologically acceptable band, not to chase performance maxima. The airflow signal therefore acts as a boundary condition enforcer, ensuring that downstream biological processes operate within known, validated regimes.

### 19.3 Temperature and Humidity of Intake Air

Temperature and humidity sensors in Zone 1 provide environmental context rather than direct control targets. Enzymatic activity in the VOC chamber and photosynthetic efficiency in the algal chamber are both humidity- and temperature-sensitive, but neither requires tight regulation at this stage.

Instead, these signals inform anticipatory moderation. Extremely dry intake air suggests a risk of desiccation in the bacterial bead matrix; excessively humid air suggests condensation risk. Control responses are deliberately indirect: slight airflow reduction to preserve moisture, or airflow increase to avoid dew point crossing. No active humidification or dehumidification is introduced, preserving system simplicity and regulatory clarity.

## 20. Zone 2 Instrumentation: Bio-Active VOC Oxidation Domain

Zone 2 is the most chemically active region of the system, yet it must remain metabolically slow and stable. Sensors here exist primarily to protect the bacterial system from mechanical and environmental stress.

### 20.1 Differential Pressure Across the VOC Cartridge

The pressure drop across the immobilized bacterial cartridge reflects both physical fouling and biological thickening of internal biofilms. A gradual increase over months is expected and acceptable; a rapid increase signals abnormal conditions such as excessive particulate ingress or humidity imbalance.

The meaning of this signal is fundamentally protective. Elevated pressure drop increases shear stress within the bead pores, risking biofilm disruption. Therefore, control actions prioritize airflow reduction rather than compensation. The system must accept reduced VOC throughput rather than force air through a stressed biological medium. Cartridge replacement is triggered not by performance loss alone, but by approaching mechanical or biological stress thresholds.

### 20.2 Post-Cartridge Humidity Measurement

Humidity measured immediately downstream of the VOC chamber reflects the water activity within the bead matrix. Because the bacteria rely on adsorbed moisture rather than free liquid, this signal is a proxy for enzymatic viability.

A declining humidity trend indicates progressive drying, which leads to metabolic dormancy rather than catastrophic failure. The correct response is not humidification but residence-time management. Airflow reduction increases contact time and reduces evaporative loss. Conversely, rising humidity suggests condensation risk and triggers airflow increase.

This sensor therefore governs a slow moisture equilibrium, not a point control.

### 20.3 VOC Proxy Sensing

If included, a VOC proxy sensor downstream of the cartridge measures relative changes in organic vapor concentration rather than absolute chemical identity. Its role is diagnostic rather than corrective.

A sustained upward trend indicates either cartridge exhaustion or environmental overload. The system may temporarily increase airflow to reduce odor perception, but the long-term translation of this signal is consumable lifecycle estimation, not real-time control. Importantly, this signal must never override protective constraints imposed by pressure or humidity sensors.

## 21. Zone 3 Instrumentation: Algal Photobioreactor Domain

Zone 3 is the biological heart of the system and therefore the most instrumented, yet also the most carefully constrained in terms of control authority.

### 21.1 pH of the Algal Liquid

The pH sensor embedded within the algal liquid is the single most important biological proxy in the entire system. Its value does not represent acidity in isolation, but rather the balance between dissolved carbon dioxide and photosynthetic uptake.

A rising pH indicates CO₂ depletion due to active photosynthesis or insufficient gas supply. A falling pH indicates CO₂ accumulation due to low photosynthetic activity or excessive gas input. Crucially, pH trends, not absolute values, carry meaning.

Control actions derived from pH are slow and proportional. When pH trends upward beyond a defined slope, the system may increase headspace air inflow to replenish CO₂. When pH trends downward, headspace airflow is reduced. Light intensity modulation acts as a secondary lever, adjusting photosynthetic demand rather than gas supply. At no point is pH driven toward a fixed setpoint; it is kept within a broad, biologically safe corridor.

### 21.2 Algal Liquid Temperature

Temperature within the algal chamber influences reaction kinetics, gas solubility, and long-term cell health. The temperature sensor does not exist to maintain a precise temperature, but to prevent chronic stress.

Rising temperature trends are addressed by reducing light intensity or increasing surrounding airflow to enhance convective cooling. Falling temperatures are generally tolerated, as photosynthesis naturally slows without adverse effects. This asymmetric response reflects the biological reality that overheating is more damaging than under-heating in this context.

### 21.3 Headspace Airflow Measurement

The airflow sensor in the headspace inlet tube measures the rate of gas–liquid interaction, which is the most direct control over algal carbon supply. Unlike the main airflow, this signal is tightly coupled to biological activity.

An increase in headspace airflow raises CO₂ availability and accelerates oxygen removal. A decrease conserves energy and reduces unnecessary gas exchange when biological demand is low. This sensor–actuator pair constitutes the primary biological control loop, yet it remains bounded by safety constraints imposed by pressure and humidity sensors.

### 21.4 Headspace Differential Pressure

The differential pressure across the headspace vent and tubing verifies containment integrity. A rising pressure drop indicates fouling of the hydrophobic barrier or partial blockage of the tubing.

This signal carries a safety-dominant meaning. Any abnormal rise immediately restricts headspace airflow to prevent liquid displacement or membrane stress. Performance considerations are secondary; containment is absolute.

### 21.5 Optical Density Measurement (Optional)

Optical density sensing, achieved via light attenuation across the algal chamber, provides long-term insight into biomass accumulation or decline. This signal operates on timescales of weeks to months and informs lifecycle assessment rather than real-time control.

Gradual increases in optical density suggest self-shading and may justify incremental light reduction. Declines may indicate aging or nutrient exhaustion. Control actions here are gentle and infrequent, reinforcing the system’s bias toward stability over responsiveness.

## 22. Zone 4 Instrumentation: Exhaust and System Validation Domain

Zone 4 sensors do not influence biological processes directly; they validate net system behavior.

### 22.1 Differential Pressure Across the Final PM Filter

This sensor ensures that all exhaust air remains filtered and that no bypass has developed. Control actions mirror those in Zone 1: minor fan adjustment within bounds, followed by maintenance signaling.

### 22.2 CO₂ Concentration in Exhaust Air

The exhaust CO₂ sensor provides the most integrative signal in the system. It reflects the combined outcome of human input, VOC oxidation, and algal uptake.

Changes in this signal are interpreted only in conjunction with intake CO₂, pH trends, and airflow data. A sustained reduction relative to intake confirms active biological carbon fixation. A rising baseline suggests either reduced photosynthesis or airflow imbalance. Control responses propagate backward through the system: adjusting headspace airflow first, then light intensity, and only finally main airflow.

This ordering ensures that biological levers are exercised before mechanical ones.

### 22.3 Fan RPM and Power Monitoring

Fan telemetry verifies that commanded airflow corresponds to physical reality. Deviations indicate mechanical wear, obstruction, or electrical issues. Control responses are limited to fault isolation and graceful derating, never aggressive compensation.

## 23. Control Philosophy Synthesis

Across all zones, a consistent philosophy emerges: sensors define limits, not targets. The system does not chase instantaneous optimization. It maintains a biologically safe operating envelope, intervening only when trends indicate drift toward instability.

Actuators—light intensity, fan speed, and headspace air access—are applied hierarchically and conservatively. Biology is allowed to respond at its own pace, while instrumentation ensures that it is neither starved nor overstressed.
