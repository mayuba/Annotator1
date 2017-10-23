   @test ()
describe('EditComponent', () => { 
   let comp: EditComponent; 
   beforeEach(() => comp = new EditComponent());

it('#isOn should be false initially', () => {            
   expect(comp.isOn).toBe(false); 
});
it('#clicked() should set #isOn to true', () => { 
    comp.clicked(); expect(comp.isOn).toBe(true); 
});
it('#clicked() should set #message to "is on"', () => { 
     comp.clicked(); 
     expect(comp.message).toMatch(/is on/i); 
});
it('#clicked() should toggle #isOn', () => { 
     comp.clicked(); 
     expect(comp.isOn).toBe(true); 
     comp.clicked(); 
     expect(comp.isOn).toBe(false); 
}); 
});
