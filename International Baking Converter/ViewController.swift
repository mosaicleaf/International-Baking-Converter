//
//  ViewController.swift
//  International Baking Converter
//
//  Created by ec2-user on 03/01/2024.
//

import UIKit
import WebKit

class ViewController:UIViewController{
    @IBOutlet var containerView: UIView! = nil
    var webView: WKWebView?
    
    override func loadView() {
        super.loadView()
        self.webView = WKWebView()
        self.view = self.webView!
        }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let baseUrl = NSURL(string: "file:///Users/ec2-user/Desktop/International Baking Converter/International Baking Converter/assets/")
        let path = Bundle.main.path(forResource: "assets/index", ofType: "html")
        let HTMLString: NSString?
        
        do {
            HTMLString = try NSString(contentsOfFile: path!, encoding: NSUTF8StringEncoding)
            webView!.loadHTMLString(HTMLString! as String, baseURL: baseUrl as URL?)
        }catch {
            HTMLString = nil
    }
        
        
        
    }
}
