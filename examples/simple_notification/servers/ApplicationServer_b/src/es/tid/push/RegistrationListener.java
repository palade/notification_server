package es.tid.push;

public interface RegistrationListener {
  public void onNewClientRegistered(String url);
  public void onClientUnregistered(String url);
}
