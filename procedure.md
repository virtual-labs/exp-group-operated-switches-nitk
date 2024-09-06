**<u>Aim of the experiment: Control of GOS from workstation</u>**

The Group Operated Switches (GOS) located in the field can be remotely operated from control center. The motor coupled to GOS gets command from workstation and either opens or closes GOS accordingly. Digital output module of Yokogawa CS 1000(DCS) is used for this purpose. Whenever such control is exercised from workstation, it is termed as Forced operation.

This process is simulated as below:

1. G.O.S Status table is present in the workstation indicating the current position of G.O.S and possible forced operation on it.
2. If a G.O.S is currently closed, By clicking on open Button on Forced operation column, corresponding G.O.S can be opened. Once open button is clicked, Digital output from DCS issue signal to motor for opening G.O.S.
3. Once G.O.S is opened the color of display of G.O.S changes and also status in G.O.S status table is indicated as open and forced operation is indicated as close.
4. This process is repeated for all G.O.S in the field.
