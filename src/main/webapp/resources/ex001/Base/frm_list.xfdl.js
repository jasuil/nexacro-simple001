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
                this.set_name("frm_list");
                this.set_titletext("Customer List Search");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCustomers", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"4\"/><Column id=\"name\" type=\"STRING\" size=\"15\"/><Column id=\"email\" type=\"STRING\" size=\"32\"/><Column id=\"phone\" type=\"STRING\" size=\"16\"/><Column id=\"comp_name\" type=\"STRING\" size=\"32\"/><Column id=\"department\" type=\"STRING\" size=\"32\"/><Column id=\"comp_phone\" type=\"STRING\" size=\"15\"/><Column id=\"comp_addr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDepartment", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"32\"/><Column id=\"value\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">Boardroom</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">Accounting</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">Personal</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">Human resources</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">States</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">Marketing</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">Engineering</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sttList", "absolute", "1.86%", "15", null, "39", "72.07%", null, this);
            obj.set_taborder("0");
            obj.set_text("Customer List Search");
            this.addChild(obj.name, obj);

            obj = new Div("divCommand", "absolute", "1.17%", "72", null, "50", "70.8%", null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Edit("edtSearch", "absolute", "5.57%", "9", null, "33", "2.79%", null, this.divCommand);
            obj.set_taborder("0");
            this.divCommand.addChild(obj.name, obj);

            obj = new Button("btnSearch", "absolute", "31.35%", "83", null, "30", "63.57%", null, this);
            obj.set_taborder("2");
            obj.set_text("Search");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "2.93%", "134", null, "214", "60.64%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsCustomers");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"320\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"ID\"/><Cell col=\"1\" rowspan=\"2\" text=\"Name\"/><Cell col=\"2\" text=\"Email\"/><Cell col=\"3\" text=\"Company\"/><Cell row=\"1\" col=\"2\" text=\"Phone\"/><Cell row=\"1\" col=\"3\" text=\"Department\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:id\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:email\"/><Cell col=\"3\" text=\"bind:comp_name\"/><Cell row=\"1\" col=\"2\" text=\"bind:phone\"/><Cell row=\"1\" col=\"3\" displaytype=\"combo\" text=\"bind:department\" combodataset=\"dsDepartment\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 50, this.divCommand,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");

            	}
            );
            this.divCommand.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Customer List Search");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("frm_list.xfdl", function(exports) {

        this.divCommand_btnSearch_onclick = function(obj,e)
        {
        	var id = "search";  
             var url = "http://localhost:8080/test/resources/sample.xml";
             var reqDs = "";
             var respDs = "dsCustomers=customers";
             var args = "";
             var callback = "received";
            
             this.transaction(id, url, reqDs, respDs, args, callback);    

        }

        this.received = function(id,code,message)
        {
             if (code == 0) {
                  this.alert(this.dsCustomers.rowcount + " numbers of data have been found.");
                  trace(this.dsCustomers.rowcount + " numbers of data have been found.");
             } else {
                  this.alert("Error["+code+"]:"+message);
                  trace("Error["+code+"]:"+message);
             }
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSearch.addEventHandler("onclick", this.divCommand_btnSearch_onclick, this);

        };

        this.loadIncludeScript("frm_list.xfdl", true);

       
    };
}
)();
