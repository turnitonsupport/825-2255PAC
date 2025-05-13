function FindProxyForURL(url, host) {
    // Bypass proxy for local addresses
    if (isInNet(host, "10.0.0.0", "255.0.0.0") || 
        isInNet(host, "192.168.0.0", "255.255.0.0") || 
        shExpMatch(host, "*.local") || 
        shExpMatch(host, "printserver.local")) {
        return "DIRECT";
    }
 
    // Use proxy only inside school's IP range
    if (isInNet(myIpAddress(), "10.10.0.0", "255.255.0.0")) {
        return "PROXY proxy.school.org:8080";
    }
 
    // At home or offsite? Go direct
    return "DIRECT";
}

 