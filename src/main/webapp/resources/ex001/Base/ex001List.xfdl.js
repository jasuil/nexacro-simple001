(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("ex001List");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDepartment", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"32\"/><Column id=\"value\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">Boardroom</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">Accounting</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">Personal</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">Human resources</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">States</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">Marketing</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">Engineering</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new CheckBox("CheckBox00", "absolute", "3.81%", "9", null, "62", "87.21%", null, this);
            obj.set_taborder("0");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "17.09%", "13", null, "43", "74.22%", null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2.64%", "71", null, "112", "72.17%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("dsDepartment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"combo\" text=\"bind:department\" combodataset=\"dsDepartment\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"1\" text=\"value\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("ex001List.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	//this.CheckBox00.value =true;
        	if(this.CheckBox00.value === false){
        	this.CheckBox00.set_value(true);
        	}else{
        	this.CheckBox00.set_value(false);
        	}
        	//this.CheckBox00.show();
        	alert(this.CheckBox00.isChecked());
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("ex001List.xfdl", true);

       
    };
}
)();
