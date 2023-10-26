import javax.swing.*;  
import java.awt.event.*;  
import java.net.*;  
public class IPFinder extends JFrame implements ActionListener{  
    JLabel l;  
    JTextField tf;  
    JButton b;  
IPFinder(){  
    super("IP Finder Tool for Any Websites - Project");  
    l=new JLabel("Enter URL:");  
    l.setBounds(700,250,150,40);;  
    tf=new JTextField();  
    tf.setBounds(700,290,200,40);  
      
    b=new JButton("Find IP");  
    b.setBounds(700,350,80,60);  
    b.addActionListener(this);  
    add(l);  
    add(tf);  
    add(b);  
    setSize(10000,1000);  
    setLayout(null);  
    setVisible(true);  
}  
public void actionPerformed(ActionEvent e){  
    String url= tf.getText();  
    try {  
        InetAddress ia=InetAddress.getByName(url);  
        String ip=ia.getHostAddress();  
        JOptionPane.showMessageDialog(this,ip);  
    } catch (UnknownHostException e1) {  
        JOptionPane.showMessageDialog(this,e1.toString());  
    }  
}  
public static void main(String[] args) {  
    new IPFinder();  
}  
}  